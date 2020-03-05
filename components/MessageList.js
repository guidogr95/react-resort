import { Component } from 'react'

export default class MessageList extends Component {
    constructor(props) {
        super(props)
    }
    
    render() {
        return (
            <ul className="user-message-list">

                {this.props.messages.map((message, index) => {
                    const rawId = message.senderId;
                    const idLength = rawId.length - 4;
                    const Id = rawId.substring(0, idLength);
                    return (
                        <li className={ this.props.currentUser.id == message.senderId ? "admin-style" : "customer-style" } key={index}>
                            <div className="chat-msg">
                                <div className="avatar">{message.senderId[0]}</div>
                                <div className="msg-content">
                                    <span>{Id}</span>
                                    <p>{message.text}</p>
                                </div>
                            </div>
                        </li>
                    )
                })}

                {/* {this.props.messages.map((message, index) => {
                    return (
                        <li key={index}>
                            <div>
                                <span>{message.senderId}</span>
                                <p>{message.text}</p>
                            </div>
                        </li>
                    )
                })} */}
            </ul>
        )
    }
}
