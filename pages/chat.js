import { useState, useContext, useEffect } from 'react'
import chatImg from '../images/chat.jpg'
import loading from '../images/gif/loading-arrow.gif'
import axios from 'axios';
import { RoomContext } from '../context'
import Link from 'next/link';
import Chatkit from '@pusher/chatkit-client'
import ChatList from '../components/ChatList'
import ChatBoard from '../components/ChatBoard'


export default function chat() {
    const context = useContext(RoomContext);
    const [input, setInput] = useState({});
    const [btnDisabled, setbtnDisabled] = useState(false);
    const [errors, setErrors] = useState({});
    const [currentUser, setCurrentUser] = useState(null);
    const [currentRoom, setCurrentRoom] = useState({});
    const [value, setValue] = useState(0);
    const style = {
        minHeight: 600,
        width: "100%",
        padding: "50px 0 50px 0"
    };
    const handleChange = (event) => setInput({
        ...input,
        [event.target.name]: event.target.value
    });

    const useForceUpdate = () => {
        setValue(Math.random());
    }

    useEffect(() => {
        context.updateCredentials(true);
    }, [])

    useEffect(() => {
        if ( context.authenticated && context.authenticated !== null ) {
            handleChatSession();
        } else {

        }
        
    }, [context.authenticated])
    

    const handleSubmit = async (event) => {
        event.preventDefault();
        setbtnDisabled(true);
        axios({
            url: 'https://express-login.now.sh/api/users/login',
            method: 'POST',
            data: JSON.stringify({
                email: input.email,
                password: input.password
            }),
            headers: { 'Content-Type': 'application/json', 'Accept': 'application/json'}
        })
        .then(res => {
            setbtnDisabled(false);
            context.updateCredentials(false, res.data.userId, res.data.email, res.data.token);
        })
        .catch(err => {
            setErrors({
                ...errors,
                error: "No se pudo conectar. Revise sus credenciales"
            })
            setbtnDisabled(false);
        })
    }

    const handleChatSession = () => {
        const chatManager = new Chatkit.ChatManager({
            instanceLocator: 'v1:us1:fe088103-8b4d-4e06-a93c-4d2fb3f963be',
            userId: context.chatUserId,
            tokenProvider: new Chatkit.TokenProvider({
                url: 'http://localhost:3001/authenticate'
            })
        })

        chatManager
            .connect()
            .then(currentUser => {
                setCurrentUser(currentUser)
                currentUser
                return currentUser.subscribeToRoom({
                        roomId: '992194b2-feaa-4842-a546-5c3482ae69c4',
                        messageLimit: 100,
                        hooks: {
                            onMessage: (message) => {
                                useForceUpdate();
                            }
                        }
                        
                }).catch(err => console.log(err))
            })
            .catch(error => console.log('Hiiiii', error))
    }

    const renderForm = () => {
        return (
            <React.Fragment>
                <h3>Login to Chat</h3>
                {
                Object.values(errors).map((err, index) => {
                    return <div key={index} className="login-err">{err}</div>
                })
                }
                <form onSubmit={handleSubmit}>
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" id="email" onChange={handleChange}/>

                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" id="password" onChange={handleChange}/>
                    <button disabled={btnDisabled} className={btnDisabled?"btn-primary submit-btn disabled":"btn-primary submit-btn"} type="submit">{
                        btnDisabled ?
                        <img className="loading-login" src={loading} alt="loading spinner"/>:
                        "Enviar"
                    }</button>
                </form>
            </React.Fragment>
        )
    }
    const renderLoggedin = () => {
        return (
            <div className="signed">
                <h3>You are logged in</h3>
                <Link href="/">
                    <a className="btn-primary signed">
                        Go Home
                    </a>
                </Link>
                <Link href="/admin">
                    <a className="btn-primary signed">
                        Admin Panel
                    </a>
                </Link>
                <div className="chat-window">
                    <ChatList currentUser={currentUser} />
                    <ChatBoard currentUser={currentUser} />
                </div>
                
            </div>
        )
    }
    if (context.authenticated === null) {
        return (
            <div style={style}>
                <div className="log-box loading">
                <img className="loading-spinner" src={loading} alt="loading"/>
                </div>
            </div>
        )
    }
    return (
        <div style={style}>
            <div className="log-box">
                {
                    context.authenticated ?
                        renderLoggedin() :
                        renderForm()
                }
            </div>
        </div>
    )
}
