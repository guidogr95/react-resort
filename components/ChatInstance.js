import { Component } from 'react'
import Chatkit from '@pusher/chatkit-client'
import { RoomContext } from '../context';

export default class ChatInstance extends Component {
    static contextType = RoomContext;
    constructor(props) {
        super(props)
        this.state = {
            messages: [],
            currentRoom: {},
            currentUser: {},
            userTyping: '',
            isUserTyping: false
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
        // console.log(this.props)
        chatManager
            .connect()
            .then(currentUser => {
                this.setState({currentUser});
                return currentUser.subscribeToRoom({
                    roomId: this.props.roomInfo.id,
                    messageLimit: 100,
                    hooks: {
                        onMessage: (message) => {
                            console.log(message)
                            this.setState({
                                messages: [...this.state.messages, message]
                            })
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

    componentDidUpdate() {
        console.log(this.context)
        console.log(this.state.currentRoom)
    }

    render() {
        const { roomInfo } = this.props.roomInfo
        if (this.state.currentRoom.length === 0) {
            return <p>Loading....</p>
        }
        
        return (
            <div className={this.context.activeWindow === this.state.currentRoom.id ? "chat-instance" : "chat-instance inactive"}>
                <ul>
                {this.state.messages.map((message, index) => {
                    return (
                        <li key={index}>
                            <div>
                                <span>{message.senderId}</span>
                                <p>{message.text}</p>
                            </div>
                        </li>
                    )
                })}
            </ul>
            </div>
        )
    }
}
