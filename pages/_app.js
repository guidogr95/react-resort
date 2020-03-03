import '../app.css'
import Navbar from '../components/Navbar'
import { RoomProvider } from '../context'

export default function MyApp({Component, pageProps}) {

    return (
    <> 
    <RoomProvider>
    <Navbar/>       
    <Component {...pageProps} />
    </RoomProvider>
    </>
    )
}