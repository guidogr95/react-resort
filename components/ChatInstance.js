import { Component } from 'react'
import Chatkit from '@pusher/chatkit-client'
import { RoomContext } from '../context'
import { FaPaperPlane } from "react-icons/fa";
import RSC from 'react-scrollbars-custom'


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
            text: '',
            scrollHeight: 0
        }
    }

    componentDidMount = () => {
        const chatManager = new Chatkit.ChatManager({
            instanceLocator: 'v1:us1:fe088103-8b4d-4e06-a93c-4d2fb3f963be',
            userId: 'guido',
            tokenProvider: new Chatkit.TokenProvider({
                url: 'https://express-login.now.sh/chat/authenticate'
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
                            if (Object.keys(this.state.currentRoom).length > 0) {
                                this.setState({
                                    messages: [...this.state.messages, message],
                                    scrollHeight: document.getElementById(`${this.state.currentRoom.createdAt.replace(/[-\-:]/g, '')}`).clientHeight    
                                })
                            } else {
                                this.setState({
                                    messages: [...this.state.messages, message]
                                })
                            }
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
            .then(room => {
                this.setState({currentRoom:room})
            })
            .then(() => {
                this.setState({scrollHeight: document.getElementById(`${this.state.currentRoom.createdAt.replace(/[-\-:]/g, '')}`).clientHeight})
            })
            .catch(error => console.log('Hiiiii', error))
            
        }

    componentDidUpdate() {
        if ( this.context.activeWindow === this.state.currentRoom.id && this.state.messages.length > 0 && this.state.currentRoom.unreadCount > 0 ) {
            this.onCursor()
        }
    }

    sendMessage = (text) => {
        this.setState({text:''})
        this.state.currentUser.sendSimpleMessage({
            roomId: this.state.currentRoom.id,
            text
        }).then()
        .catch(err => {
            console.log('error', err);
            this.setState({text})
        })
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

    onEnterPress = (e) => {
        if(e.keyCode == 13 && e.shiftKey == false) {
            this.onSubmit(e);
          }
    }
    onCursor = () => {
        this.state.currentUser.setReadCursor({
            roomId: this.state.currentRoom.id,
            position: this.state.messages[this.state.messages.length-1].id
          })
            .then(() => {
              console.log('Success!')
            })
            .catch(err => {
              console.log(`Error setting cursor: ${err}`)
            })
    }

    render() {
        return (
            <div className={this.context.activeWindow === this.state.currentRoom.id ? "chat-instance" : "chat-instance inactive"}>
                
                <div className="chat-messages" >
                <RSC scrollTop={this.state.scrollHeight} >
                    <ul id={ this.state.currentRoom.createdAt ? this.state.currentRoom.createdAt.replace(/[-\-:]/g, '') : "" } >
                        {this.state.messages.map((message, index) => {
                            const rawId = message.senderId;
                            const Id = rawId.slice(20,rawId.length)
                            return (
                                <li className={ this.state.currentUser.id == message.senderId ? "admin-style" : "customer-style" } key={index}>
                                    <div className="chat-msg">
                                        <div className="avatar" onClick={this.onCursor} >{ this.state.currentUser.id == message.senderId ? message.senderId[0] : Id[0] }</div>
                                        <div className="msg-content">
                                            <span>{this.state.currentUser.id == message.senderId ? message.senderId : Id}</span>
                                            <p>{message.text}</p>
                                        </div>
                                    </div>
                                </li>
                            )
                        })}
                    </ul>
                </RSC>
                </div>
                <div className="chat-input-text">
                    <form onSubmit={this.onSubmit}>
                            <textarea onKeyDown={this.onEnterPress} className="hidescroll" name="text" placeholder="Your text..." onChange={this.handleChange} value={this.state.text} autoComplete="off" wrap="hard" />
                            <div className="button-container">
                                <button type="submit"><FaPaperPlane/></button>
                            </div>
                    </form>
                </div>
            </div>
        )
    }
}
