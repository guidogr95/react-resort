import { useState, useContext, useEffect } from 'react'
import chatImg from '../images/chat.jpg'
import loading from '../images/gif/loading-arrow.gif'
import axios from 'axios';
import { RoomContext } from '../context'
import Link from 'next/link';


export default function chat() {
    const context = useContext(RoomContext);
    const [input, setInput] = useState({});
    const [btnDisabled, setbtnDisabled] = useState(false);
    const [errors, setErrors] = useState({});
    const style = {
        backgroundImage: "url("+ chatImg + ")",
        height: 600,
        width: "100%",
        padding: "150px 0 150px 0"
    };
    const handleChange = (event) => setInput({
        ...input,
        [event.target.name]: event.target.value
    });

    useEffect(() => {
        context.updateCredentials(true);
    }, [])

    const handleSubmit = async (event) => {
        event.preventDefault();
        setbtnDisabled(true);
        axios({
            url: 'http://localhost:8000/api/users/login',
            method: 'POST',
            data: JSON.stringify({
                email: input.email,
                password: input.password
            }),
            headers: { 'Content-Type': 'application/json'}
        })
        .then(res => {
            setbtnDisabled(false);
            context.updateCredentials(false, res.data.userId, res.data.email, res.data.token);
        })
        .catch(err => {
            console.log(err);
            setErrors({
                ...errors,
                error: "No se pudo conectar. Revise sus credenciales"
            })
            setbtnDisabled(false);
        })
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
                    {/* <Link href="/admin">
                        <button className="btn-primary submit-btn">
                            Admin Panel
                        </button>
                    </Link> */}
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
