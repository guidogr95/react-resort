import React, { Component } from 'react'
import ChatInstance from './ChatInstance'

export default class ChatBoard extends Component {
    constructor(props) {
        super(props)
        this.state = {
            currentUser: this.props.currentUser
        }
    }

    componentDidMount() {
        console.log(this.props.currentUser)
    }

    componentDidUpdate(prevProps) {
        if ( prevProps.currentUser !== this.props.currentUser ) {
            console.log(this.props.currentUser)
            this.setState({
                currentUser: this.props.currentUser
            })
        }
    }
    render() {
        const { currentUser } = this.state
        return (
            <div className="chat-board">
                {
                    currentUser && currentUser !== null ?
                    Object.values(currentUser.rooms).map((room) => {
                        if ( room.id !== '992194b2-feaa-4842-a546-5c3482ae69c4' ) {
                            return <ChatInstance id={room.id} key={room.id} roomInfo={room}  />
                        }
                    }) : 'Loading'
                }
            </div>
        )
    }
}
