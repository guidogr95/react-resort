import { Component } from 'react'
import { RoomContext } from '../context';
import ChatRoomButton from './ChatRoomButton';

export default class ChatList extends Component {
    static contextType = RoomContext;
    constructor(props) {
        super(props)
        this.state = {
            activeWindow: ''
        }
    }

    componentDidUpdate(prevProps) {
        
        if ( (prevProps.currentUser !== this.props.currentUser) && this.props.currentUser !== null && this.props.currentUser.rooms.length > 1) {
            const chatWindow = this.props.currentUser.rooms.find(room => room.id !== '992194b2-feaa-4842-a546-5c3482ae69c4' )
            this.context.changeWindow(chatWindow.id)
        }
    }

    switchChat = (event) => {
        this.context.changeWindow(event.target.value)
    }

    render() {
        const { currentUser } = this.props
        return (
            <ul className="chatrooms-container">
            {
                currentUser ?
                Object.values(currentUser.rooms).map((room, index) => {
                    if ( room.id !== '992194b2-feaa-4842-a546-5c3482ae69c4' ) {
                        return (
                            <ChatRoomButton room={room} onClick={this.switchChat} />
                        )
                    }
                }) : 'Loading...'
            }
            </ul>
        )
    }
}
