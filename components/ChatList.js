import { Component } from 'react'
import { RoomContext } from '../context';
import ChatRoomButton from './ChatRoomButton';
import jwt from 'jsonwebtoken';
import axios from 'axios';
import RSC from 'react-scrollbars-custom'

export default class ChatList extends Component {
    static contextType = RoomContext;
    constructor(props) {
        super(props)
        this.state = {
            activeWindow: '',
            checkedChats: [],
            checkAll: false
        }
    }

    componentDidUpdate(prevProps, prevState) {
        
        
        if ( (prevProps.currentUser !== this.props.currentUser) && this.props.currentUser !== null && this.props.currentUser.rooms.length > 1) {
            const chatWindow = this.props.currentUser.rooms.find(room => room.id !== '992194b2-feaa-4842-a546-5c3482ae69c4' )
            this.context.changeWindow(chatWindow.id)
        }

        if ( this.state.checkedChats.length === 0 && this.state.checkAll ) {
            this.setState({ checkAll: false })
        }
    }

    useForceUpdate = () => {
        this.setState({counter: this.state.counter + 1})
    }

    switchChat = (event) => {
        this.context.changeWindow(event.target.value)
    }

    addCheckedChat = (chatRoom) => {
        this.setState({
            checkedChats: [...this.state.checkedChats, chatRoom]
        })
    }

    removeCheckedChat = (chatRoom) => {
        const filtered = this.state.checkedChats.filter(room => room.id !== chatRoom.id)
        this.setState({
            checkedChats: filtered
        })
    }

    deleteChats = () => {
        const length = this.state.checkedChats.length;
        let loop = 0; 
        this.state.checkedChats.map(chat => {
            try {
                const token = this.getToken();
                axios({
                    url: `https://us1.pusherplatform.io/services/chatkit_scheduler/v1/fe088103-8b4d-4e06-a93c-4d2fb3f963be/users/${chat.createdByUserId}`,
                    method: 'put',
                    headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${token}`,}
                })
                .then(res => console.log(res))
                .catch(err => console.log(err));
            } catch(err) {
                console.log(err)
            }
            this.props.currentUser.deleteRoom({ roomId: chat.id })
            .then(() => {
                console.log(`Deleted room with ID: ${chat.id}`);
                this.setState({ checkAll: false })
                loop += 1
                if ( loop === length ) {
                    this.setState({ checkedChats: [] })
                }
            })
            .catch(err => {
                console.log(`Error deleted room ${chat.id}: ${err}`)
            })
        })
    }

    handleCheckAll = () => {
        const isCheckAll = !this.state.checkAll
        this.setState({ checkAll: !this.state.checkAll })
        if (isCheckAll)  {
            const allRooms = this.props.currentUser.rooms.filter(room => room.id !== '765b61eb-ad46-4c8b-bd31-2e4d4acc6f45')
            this.setState({ checkedChats: allRooms })
        } else {
            this.setState({ checkedChats: [] })
        }
    }

    getToken = (userId) => {
        const token = jwt.sign({ instance: 'fe088103-8b4d-4e06-a93c-4d2fb3f963be', iss: 'api_keys/d6b63c39-9c58-459d-a34b-a8d39eb6124d', sub: userId, su: true }, 'l8I+uX85fbJCwMZVSrlyE4z2f7ckYbgbirHv5pfhDgE=', { expiresIn: '1h' });
        return token
    }

    seeList = () => {
        console.log(this.state.checkedChats)
    }

    render() {
        const { currentUser } = this.props
        return (
            <div className="chat-list-container">
                <div className="chat-list-settings" >
                    <input type="checkbox" name="checkAll" id="chat-checkbox" checked={this.state.checkAll} onChange={this.handleCheckAll}/>
                    <label htmlFor="chat-checkbox"></label>
                    <button className="btn-primary" onClick={this.deleteChats} >Delete Chats</button>
                </div>
                <RSC className="chatlist-box">
                    <ul className="chatrooms-container">

                    {
                        currentUser ?
                        Object.values(this.props.currentUser.rooms).map((room, index) => {
                            if ( room.id !== '765b61eb-ad46-4c8b-bd31-2e4d4acc6f45' ) {
                                return (
                                    <ChatRoomButton key={room.id} room={room} see={this.seeList} checkAll={this.state.checkAll} onClick={this.switchChat} check={this.addCheckedChat} uncheck={this.removeCheckedChat}  />
                                )
                            }
                        }) : 'Loading...'
                    }
                    </ul>
                </RSC>
            </div>
        )
    }
}
