import { Component } from 'react'
import Chatkit from '@pusher/chatkit-client'
//Components
import MessageList from './MessageList'
import SendMessageForm from './SendMessageForm'
import TypingIndicator from './TypingIndicator'

export default class ChatScreen extends Component {
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
            userId: this.props.userId,
            tokenProvider: new Chatkit.TokenProvider({
                url: 'http://localhost:3001/authenticate'
            })
        })

        chatManager
            .connect()
            .then(currentUser => {
                this.setState({currentUser});
                console.log(currentUser)

                return currentUser.createRoom({
                    id: `${currentUser.id}-room`,
                    name: `${currentUser.id}-room`,
                    private: true,
                    addUserIds: [currentUser.id, 'guido']
                }).then(room => {
                    this.setState({ currentRoom: room })
                    return currentUser.subscribeToRoom({
                    roomId: room.id,
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
                }).then(() => {
                    return this.state.currentUser.subscribeToRoomMultipart({
                        roomId: '992194b2-feaa-4842-a546-5c3482ae69c4',
                        messageLimit: 100,
                        hooks: {
                            onMessage: (message) => {
                                console.log(message)
                                // this.updateRooms();
                            }
                        }
                        
                    }).then(() => {
                        this.state.currentUser.sendSimpleMessage({
                            roomId: '992194b2-feaa-4842-a546-5c3482ae69c4',
                            text: 'we'
                        }).then(messageId => console.log('sent', messageId))
                        .catch(err => console.log('error', err))
                    })
                })
                }).catch(err => {
                    console.log('error', err)
                })

                // return currentUser.subscribeToRoom({
                //     roomId: 'eadf4af7-69ff-4a59-9dc1-d4c4adcafde4',
                //     messageLimit: 100,
                //     hooks: {
                //         onMessage: (message) => {
                //             console.log(message)
                //             this.setState({
                //                 messages: [...this.state.messages, message]
                //             })
                //         },
                //         onUserStartedTyping: user => {
                //             this.setState({
                //                 userTyping: user.name,
                //                 isUserTyping: true
                //             })
                //         },
                //         onUserStoppedTyping: user => {
                //             this.setState({
                //                 userTyping: user.name,
                //                 isUserTyping: false
                //             })
                //         }
                //     }
                // })
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
            <div>
                Hello {this.props.currentUsername}
                <MessageList messages={this.state.messages}/>
                { this.state.isUserTyping ? <TypingIndicator userTyping={this.state.userTyping} /> : '' }
                <SendMessageForm onSubmit={this.sendMessage} onChange={this.sendTypingEvent} />
            </div>
        )
    }
}
