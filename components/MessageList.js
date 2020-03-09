import { Component } from 'react'

export default class MessageList extends Component {
    constructor(props) {
        super(props)
    }
    
    render() {
        return (
            <ul className="user-message-list">

                {this.props.messages.map((message) => {
                    const rawId = message.senderId;
                    const idLength = rawId.length;
                    const Id = rawId.substring(20, idLength);
                    return (
                        <li className={ this.props.currentUser.id == message.senderId ? "admin-style" : "customer-style" } key={message.id}>
                            <div className="chat-msg">
                                <div className="avatar">{this.props.currentUser.id == message.senderId ? Id[0] : rawId[0] }</div>
                                <div className="msg-content">
                                    <span>{  this.props.currentUser.id == message.senderId ? Id : rawId }</span>
                                    <p>{message.text}</p>
                                </div>
                            </div>
                        </li>
                    )
                })}
            </ul>
        )
    }
}
