import { Component } from 'react'
import ChatInstance from './ChatInstance'
import Link from 'next/link'
import { RoomContext } from '../context'

export default class ChatBoard extends Component {
    static contextType = RoomContext;
    render() {
        return (
            <div className="chat-header-board">
                <div className="chat-header">
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
