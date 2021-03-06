import React, { Component } from 'react'
//Context
import { RoomContext } from '../context';
//Components
import Room from './Room';
import Loading from './Loading';
import Title from './Title';

export default class FeaturedRooms extends Component {
    static contextType = RoomContext
    render() {
        let { loading, featuredRooms: rooms } = this.context;
        rooms = rooms.map(room => {
            return <Room key={room.id} room={room}/>
        })
        return (
            <section className="featured-rooms">
                <Title title="Habitaciones Recomendadas"/>
                <div className="featured-rooms-center">
                    { loading ? <Loading/> : rooms }
                </div>
            </section>
        )
    }
}
