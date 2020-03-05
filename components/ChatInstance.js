import { Component } from 'react'
import Chatkit from '@pusher/chatkit-client'
import { RoomContext } from '../context'
import { FaPaperPlane } from "react-icons/fa";
import { animateScroll } from 'react-scroll'


export default class ChatInstance extends Component {
    static contextType = RoomContext;
    constructor(props) {
        super(props)
        this.state = {
            messages: [],
            currentRoom: {},
            currentUser: {},
            userTyping: '',
            isUserTyping: false,
            text: ''
        }
    }

    componentDidMount = () => {
        const chatManager = new Chatkit.ChatManager({
            instanceLocator: 'v1:us1:fe088103-8b4d-4e06-a93c-4d2fb3f963be',
            userId: 'guido',
            tokenProvider: new Chatkit.TokenProvider({
                url: 'http://localhost:3001/authenticate'
            })
        })
        
        chatManager
            .connect()
            .then(currentUser => {
                this.setState({currentUser});
                return currentUser.subscribeToRoom({
                    roomId: this.props.roomInfo.id,
                    messageLimit: 100,
                    hooks: {
                        onMessage: (message) => {
                            this.setState({
                                messages: [...this.state.messages, message]
                            })
                            animateScroll.scrollToBottom({
                                containerId: "chat-messages"
                            });
                        },
                        onUserStartedTyping: user => {
                            this.setState({
                                userTyping: user.name,
                                isUserTyping: true
                            })
                        },
                        onUserStoppedTyping: user => {
                            this.setState({
                                userTyping: user.name,
                                isUserTyping: false
                            })
                        }
                    }
                })
            })
            .then(room => this.setState({currentRoom:room}))
            .catch(error => console.log('Hiiiii', error))
    }

    sendMessage = (text) => {
        this.state.currentUser.sendSimpleMessage({
            roomId: this.state.currentRoom.id,
            text
        }).then(messageId => this.setState({text:''}))
        .catch(err => console.log('error', err))
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    onSubmit = (event) => {
        event.preventDefault();
        this.sendMessage(this.state.text);
    }


    render() {
        if (this.state.currentRoom.length === 0) {
            return <p>Loading....</p>
        }
        return (
            <div className={this.context.activeWindow === this.state.currentRoom.id ? "chat-instance" : "chat-instance inactive"}>
                <div className="chat-messages" id="chat-messages">
                    <ul>
                        {this.state.messages.map((message, index) => {
                            
                            return (
                                <li className={ this.state.currentUser.id == message.senderId ? "admin-style" : "customer-style" } key={index}>
                                    <div className="chat-msg">
                                        <div className="avatar">{message.senderId[0]}</div>
                                        <div className="msg-content">
                                            <span>{message.senderId}</span>
                                            <p>{message.text}</p>
                                        </div>
                                    </div>
                                </li>
                            )
                        })}
                    </ul>
                </div>
                <div className="chat-input-text">
                    <form onSubmit={this.onSubmit}>
                            <input name="text" type="text" placeholder="Your text..." onChange={this.handleChange} value={this.state.text} autoComplete="off" />
                            <div className="button-container">
                                <button type="submit"><FaPaperPlane/></button>
                            </div>
                    </form>
                </div>
            </div>
        )
    }
}
