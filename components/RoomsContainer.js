import React, { useContext } from 'react'
import RoomsFilter from './RoomsFilter'
import RoomsList from './RoomsList'
import { RoomConsumer, RoomContext } from '../context'
import Loading from './Loading'

function RoomsContainer(props){
    const context = useContext(RoomContext);
    const {loading,sortedRooms,rooms} = context;
    if (loading) {
        return <Loading/>
    }
    return (
        <>
            <RoomsFilter rooms={rooms} />
            <RoomsList rooms={sortedRooms} />
        </>
    )
}

export default RoomsContainer;