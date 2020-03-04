import { Component } from 'react'
import { RoomContext } from '../context';

export default class ChatList extends Component {
    static contextType = RoomContext;
    constructor(props) {
        super(props)
        this.state = {
            activeWindow: ''
        }
    }

    componentDidMount() {
        this.context.changeWindow(this.state.activeWindow)
    }

    componentDidUpdate(prevProps) {
        if ( (prevProps.currentUser !== this.props.currentUser) && this.props.currentUser !== null ) {
            this.setState({
                activeWindow: this.props.currentUser.rooms[1].id
            })
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
                            <li key={room.id}>
                                <button value={room.id} onClick={this.switchChat} >{room.id}</button>
                            </li>
                        )
                    }
                }) : 'Loading...'
            }
            </ul>
        )
    }
}
