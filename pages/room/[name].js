import React, { Component } from 'react'
import Link from 'next/link'
import fetch from 'isomorphic-unfetch'
//Components
// import defaultBcg from '../images/room-1.jpeg'
import Banner from '../../components/Banner'
//Context
import { RoomContext, RoomProvider } from '../../context'
import StyledHero from '../../components/StyledHero'
import Loading from '../../components/Loading'
//SEO
import Head from 'next/head';

class room extends Component {
    
    static getInitialProps= async ({query}) => {
        const res = await fetch('https://test-project-react.herokuapp.com/hotel-rooms');
        const data = await res.json();
        const room = data.find(room => room.slug === query.name);
        return {query,room}
    }
    constructor(props){
        super(props)
        this.state={
            slug: this.props.query.name,
            room: this.props.room
        }
    }
    static contextType = RoomContext;
        
    render() {
        
        if (!room) {
            return <Loading/>
        }
        const { name,description,capacity,size,price,extras,breakfast,pets,images } = this.state.room
        const roomimages = images.map(image => image.url);
        const [mainImg,...defaultImg] = roomimages;
        return (
            <>
            <Head>
                <title>{name}</title>
                <meta name="title" content={name}/>
                <meta name="description" content={description}/>
                <meta property="og:description" content={description}/>
                <meta property="og:image" content={mainImg}/>
                <meta property="og:title" content={name}/>
            </Head>
            <StyledHero img={mainImg}>
                <Banner title={`${name} room`}>
                    <Link href="/rooms">
                        <a  className="btn-primary">back to rooms</a>
                    </Link>
                </Banner>
            </StyledHero>
            <section className="single-room">
                <div className="single-room-images">
                { defaultImg.map((item,index) => {
                   return <img key={index} src={item} alt={name}/>
                }) }
                </div>
                <div className="single-room-info">
                    <article className="description">
                        <h3>Details</h3>
                        <p>{description}</p>
                    </article>
                    <article className="info">
                        <h3>Info</h3>
                        <h6>price: ${price}</h6>
                        <h6>size: ${size} sqm</h6>
                        <h6>max capacity: {capacity} pax</h6>
                        <h6>{pets?"pets allows":"no pets allowed"}</h6>
                        <h6>{breakfast && "free breakfast included"}</h6>
                    </article>
                </div>
            </section>
            <section className="room-extras">
                <h6>extras</h6>
                <ul className="extras">
                    {extras.map((item,index) => {
                        return <li key={index}>- {item}</li>
                    })}
                </ul>
            </section>
            </>
        )
    }
}

export default room;