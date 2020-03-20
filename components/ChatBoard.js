import { Component } from 'react'
import ChatInstance from './ChatInstance'
import Link from 'next/link'
import { IoMdChatboxes } from "react-icons/io"
import { RoomContext } from '../context'

export default class ChatBoard extends Component {
    static contextType = RoomContext;
    render() {
        return (
            <div className="chat-header-board">
                <div className="chat-header">
                    <div className="deploy-chats">
                        <IoMdChatboxes onClick={this.props.setChatListActive} />
                        { 
                            Object.keys(this.context.currentUser).length > 0 ?
                            Object.values(this.context.currentUser.rooms).find(room => room.id !== '765b61eb-ad46-4c8b-bd31-2e4d4acc6f45' &&room.unreadCount > 0) ? <div className="pending-msg"></div> : '' 
                            : ''
                        }
                    </div>
                    <Link href="/">
                        <a className="btn-primary">
                            Go Home
                        </a>
                    </Link>
                    <Link href="/admin">
                        <a className="btn-primary">
                            Admin Panel
                        </a>
                    </Link>
                </div>
                <div className="chat-board">
                    {
                        Object.keys(this.context.currentUser).length > 0 ?
                        Object.values(this.context.currentUser.rooms).map((room) => {
                            if ( room.id !== '992194b2-feaa-4842-a546-5c3482ae69c4' ) {
                                return <ChatInstance id={room.id} key={room.id} roomInfo={room}  />
                            }
                        }) : 'Loading'
                    }
                </div>
            </div>
        )
    }
}
