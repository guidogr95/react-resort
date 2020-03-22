import { Component } from 'react'
import Chatkit from '@pusher/chatkit-client'
import { RoomContext } from '../context'
//Components
import MessageList from './MessageList'
import SendMessageForm from './SendMessageForm'
import TypingIndicator from './TypingIndicator'

export default class ChatScreen extends Component {
    static contextType = RoomContext;
    constructor(props) {
        super(props)
        this.state = {
            messages: [],
            currentRoom: {},
            currentUser: {},
            userTyping: '',
            isUserTyping: false,
            scrollHeight: 0
        }
    }

    componentDidMount = () => {
        const chatManager = new Chatkit.ChatManager({
            instanceLocator: 'v1:us1:fe088103-8b4d-4e06-a93c-4d2fb3f963be',
            userId: this.props.userId,
            tokenProvider: new Chatkit.TokenProvider({
                url: 'https://express-login.now.sh/chat/authenticate'
            })
        })

        chatManager
            .connect()
            .then(currentUser => {
                this.setState({currentUser})
                return currentUser.createRoom({
                    id: currentUser.id,
                    name: currentUser.name,
                    private: true,
                    addUserIds: [currentUser.id, 'guido']
                }).then(room => {
                    this.setState({ currentRoom: room })
                    return currentUser.subscribeToRoom({
                    roomId: room.id,
                    messageLimit: 100,
                    hooks: {
                        onMessage: (message) => {
                            if ( message.senderId !== this.state.currentUser.id ) {
                                this.context.playNotif();
                            }
                            this.setState({
                                messages: [...this.state.messages, message],
                                scrollHeight: document.getElementById('chatbox-user').clientHeight    
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
                }).then(() => {
                    return this.state.currentUser.subscribeToRoomMultipart({
                        roomId: '765b61eb-ad46-4c8b-bd31-2e4d4acc6f45',
                        messageLimit: 100,
                        hooks: {
                            onPresenceChanged: (state, user) => {
                                // console.log(`User ${user.name} is ${state.current}`)
                            }
                        }
                        
                    }).catch(err => console.log(err))
                })
                }).catch(err => {
                    console.log('error', err)
                })
            })
            .catch(error => console.log('Hiiiii', error))
    }

    sendMessage = (text) => {
        this.state.currentUser.sendSimpleMessage({
            roomId: this.state.currentRoom.id,
            text
        }).then(messageId => this.setState({text:''}))
        .catch(err => console.log('error', err))
    }

    sendTypingEvent = () => {
        this.state.currentUser.isTypingIn({
            roomId: this.state.currentRoom.id
        }).catch(err => {
            console.log(err)
        })
    }

    render() {
        return (
            <div className="chat-screen" >
                <MessageList messages={this.state.messages} currentUser={this.state.currentUser} scrollHeight={this.state.scrollHeight} />
                { this.state.isUserTyping ? <TypingIndicator userTyping={this.state.userTyping} /> : '' }
                <SendMessageForm onSubmit={this.sendMessage} onChange={this.sendTypingEvent} />
            </div>
        )
    }
}
