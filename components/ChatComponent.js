import { Component } from 'react'
import UsernameForm from './UsernameForm'
import ChatScreen from './ChatScreen'
import ChatScreenDisplay from './ChatScreenDisplay'
import axios from 'axios'
import { RoomContext } from '../context';
import { MdChat, MdClear } from "react-icons/md";

export default class ChatComponent extends Component {
    constructor(props) {
        super(props)
        this.state= {
            currentScreen: 'WhatIsYourUsernameScreen',
            currentUsername: '',
            userId: '',
            modalShow: false
        }
    }
    static contextType = RoomContext;
    handleSubmit = (username) => {
        axios({
            url: 'https://express-login.now.sh/chat/users',
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

    toggleModal = () => {
        this.setState({
            modalShow: !this.state.modalShow
        })
    }
    
    render() {
        if ( this.context.authenticated || this.context.authenticated === null ) {
            return (<div></div>)
        } else {
            return (
                // <div className="chat-component">
                //     {this.handleChat()}
                // </div>
                <div className="chat-component chat-icon">
                    <div className="chat-component-wrapper">
                        <ChatScreenDisplay show={this.state.modalShow} onSubmit={this.handleSubmit} currentScreen={this.state.currentScreen} currentUsername={this.state.currentUsername} userId={this.state.userId}/>
                        <div className="chat-icon-wrapper" onClick={this.toggleModal}>
                            <div className="modal-icon">
                                <MdClear className={this.state.modalShow ? "cross" : "cross hide"} />
                            </div>
                            <div className="modal-icon">
                                <MdChat  className={this.state.modalShow ? "chat hide" : "chat"} />  
                            </div>
                            
                        </div>
                    </div>
                </div>
            )
        }
    }
}
