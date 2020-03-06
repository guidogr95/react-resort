import { Component } from 'react'

export default class ChatRoomButton extends Component {
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

    render() {
        const rawId = this.props.room.id;
        const idLength = rawId.length - 9;
        const Id = rawId.substring(0, idLength);

        const rawDate = this.props.room.createdAt;
        const splitDate = rawDate.split('T');
        const Date = splitDate[0];
        const Time = splitDate[1].substring(0,5);
        return (
            <>
            <li className="chat-room" key={this.props.room.id}>
                <input type="checkbox" name={this.props.room.id} id="chat-checkbox" checked={this.state.checked} onChange={this.handleChange}/>
                <h5 onClick={this.props.see} >{Id}</h5>
                <p>{Date}</p>
                <p>{Time}</p>
                <div className="to-chat-btn">
                    <button value={this.props.room.id} onClick={this.props.onClick}>></button>
                </div>
            </li>
        </>
        )
    }
}
