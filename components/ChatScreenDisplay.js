import { Component } from 'react'
import UsernameForm from './UsernameForm'
import ChatWidgetHeader from './ChatWidgetHeader'
import ChatScreen from './ChatScreen'

export default class ChatScreenDisplay extends Component {
    constructor(props) {
        super(props)
        this.state= {
            userId: '',
            currentUsername: ''
        }
    }

    componentDidUpdate(prevProps) {
        if ( prevProps.userId !== this.props.userId && prevProps.currentUsername !== this.props.currentUsername ) {
            this.setState({ 
                userId: this.props.userId,
                currentUsername: this.props.currentUsername
            })
        }
    }

    handleChat = () => {
        if ( this.props.currentScreen === 'WhatIsYourUsernameScreen' ) {
            return <UsernameForm onSubmit={this.props.onSubmit}/>         
        } else if ( this.props.currentScreen === 'ChatScreen' && this.state.userId !== '' && this.state.currentUsername !== '' ) {
            return <ChatScreen currentUsername={this.state.currentUsername} userId={this.state.userId} />
        }
    }

    render() {
        return (
            <div className={this.props.show ? "chat-screen-display" : "chat-screen-display inactive" } >
                <ChatWidgetHeader toggleModal={this.props.toggleModal} />
                {this.handleChat()}
            </div>
        )
    }
}
