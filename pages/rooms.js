import React from 'react';
import Link from 'next/link';
//Components
import Hero from '../components/Hero';
import Banner from '../components/Banner';
import RoomsContainer from '../components/RoomsContainer';
import { RoomProvider } from '../context'


const Rooms = () => {
    return (
        <>
        <RoomProvider>
        <Hero hero="roomsHero">
            <Banner title="Habitaciones">
                <Link href="/">
                    <a className="btn-primary">Regresar a Inicio</a>
                </Link>
            </Banner>
        </Hero>
        <RoomsContainer/>
        </RoomProvider>
        </>
    )
}

export default Rooms
