import { Component } from 'react'
import { RoomContext } from '../context';


export default class ChatRoomButton extends Component {
    static contextType = RoomContext;
    constructor(props) {
        super(props)
        this.state = {
            checked: false
        }
    }

    handleChange = event => {
        this.setState({ checked: !this.state.checked })
        const target = event.target;
        if(target.checked) {
            this.props.check(this.props.room)
        } else {
            this.props.uncheck(this.props.room)
        }
    }

    componentDidUpdate(prevProps) {

        if (prevProps.checkAll !== this.props.checkAll) {
            if ( this.props.checkAll && this.state.checked ) {
            } else if ( this.props.checkAll && !this.state.checked ) {
                this.setState({ checked: !this.state.checked })
            } else if ( !this.props.checkAll && this.state.checked ) {
                this.setState({ checked: !this.state.checked })
            }
        }
        
    }

    handleChatSwitch = () => {
        this.props.onClick(this.props.room.id);
        this.props.setChatListActive();
    }
    
    render() {
        const dateRaw = this.props.room.id
        const Date = dateRaw.slice(0,10)
        const Time = dateRaw.slice(11,16)
        const id  = this.props.room.id.replace(/\s/g,'')
        return (
            <>
            <li onClick={this.handleChatSwitch} className={ this.context.activeWindow === this.props.room.id ? "chat-room active" : "chat-room" }>
                <input type="checkbox" name={this.props.room.id} id={id} checked={this.state.checked} onChange={this.handleChange}/>
                <label htmlFor={id}></label>
                <div className="chat-info">
                    <div>
                        <h5>{this.props.room.name}</h5>
                        {this.props.room.unreadCount > 0 ? <div className="pending-msg-onlist"/> : ''}
                    </div>
                    <p>{Date} {Time}</p>
                </div>
            </li>
        </>
        )
    }
}
