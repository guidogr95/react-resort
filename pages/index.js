//Components
import Hero from '../components/Hero';
import Banner from '../components/Banner';
import Services from '../components/Services';
import FeaturedRooms from '../components/FeaturedRooms'
import { RoomProvider } from '../context';
import Link from 'next/link'
// import '../app.css'

const Home = () => {

    return (
        <React.Fragment>
        <RoomProvider>
            <Hero>
                <Banner title="Luxurious Rooms" subtitle="Deluxe Rooms Starting at $299">
                    <Link href="/rooms">
                        <a  className="btn-primary">our rooms</a>
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

