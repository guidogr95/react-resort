import { Component } from 'react'
import UsernameForm from './UsernameForm'
import ChatScreen from './ChatScreen'
import axios from 'axios'
import { RoomContext } from '../context';

export default class ChatComponent extends Component {
    constructor(props) {
        super(props)
        this.state= {
            currentScreen: 'WhatIsYourUsernameScreen',
            currentUsername: '',
            userId: ''
        }
    }
    static contextType = RoomContext;
    handleSubmit = (username) => {
        axios({
            url: 'http://localhost:3001/users',
            method: 'POST',
            data: JSON.stringify({
                username
            }),
            headers: { 'Content-Type': 'application/json' }
        }).then(res => {
            console.log(res.data.userId)
            console.log('success')
            this.setState({
                currentUsername: username,
                currentScreen: 'ChatScreen',
                userId: res.data.userId
            })
        }).catch(err => {
            console.log(err);  
        })
    }
    
    handleChat = () => {
        if ( this.state.currentScreen === 'WhatIsYourUsernameScreen' ) {
            return <UsernameForm onSubmit={this.handleSubmit}/>         
        } else if ( this.state.currentScreen === 'ChatScreen' ) {
            return <ChatScreen currentUsername={this.state.currentUsername} userId={this.state.userId} />
        }
    }
    
    render() {
        if ( this.context.authenticated || this.context.authenticated === null ) {
            return (<div></div>)
        } else {
            return (
                <div className="chat-component">
                    {this.handleChat()}
                </div>
            )
        }
    }
}
