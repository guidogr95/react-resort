import { useContext } from 'react';
//Components
import Hero from '../components/Hero';
import Banner from '../components/Banner';
import Services from '../components/Services';
import FeaturedRooms from '../components/FeaturedRooms'
import { RoomProvider, RoomContext } from '../context';
import Link from 'next/link'
import Head from 'next/head'

const Home = () => {
    return (
        <React.Fragment>
            <Head>
                <title>Beach Hotel</title>
                <meta name="title" content='Beach Hotel'/>
                <meta name="description" content='It is a beach hotel'/>
                <meta property="og:description" content='It is a beach hotel'/>
                <meta property="og:title" content='Beach Hotel'/>
            </Head>
        <RoomProvider>
            <Hero>
                <Banner title="Habitaciones de Lujo" subtitle="Habitaciones de lujo desde $150">
                    <Link href="/rooms/">
                        <a className="btn-primary">nuestras habitaciontes</a>
                    </Link>
                </Banner>
            </Hero>
            <Services />
            <FeaturedRooms />
        </RoomProvider> 
        </React.Fragment>
    )
}

export default Home

