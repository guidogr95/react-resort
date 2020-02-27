/* eslint-disable no-unused-vars */
import React, { Component } from 'react';
import items from './data';
import axios from 'axios'

const RoomContext = React.createContext();
// 

class RoomProvider extends Component {
    state={
        rooms: [],
        sortedRooms: [],
        featuredRooms: [],
        loading: true,
        type:'all',
        capacity:1,
        price:0,
        minPrice: 0,
        maxPrice: 0,
        minSize: 0,
        maxSize: 0,
        breakfast: false,
    }
    componentDidMount(){
        const self = this;
        axios.get('http://192.168.1.134:1337/hotel-rooms')
        .then(function (response) {
          // handle success
          console.log(response);
          let rooms = self.formatData(response);
          let featuredRooms = rooms.filter(room => room.featured === true);
            let maxPrice = Math.max(...rooms.map(item => item.price));
            let maxSize = Math.max(...rooms.map(item => item.size));
            self.setState({
                rooms,
                featuredRooms,
                sortedRooms: rooms,
                loading: false,
                price: maxPrice,
                maxPrice,
                maxSize
            })
        //   return rooms
        })
        // let rooms = this.formatData(items);
        // let featuredRooms = rooms.filter(room => room.featured === true);
        // let maxPrice = Math.max(...rooms.map(item => item.price));
        // let maxSize = Math.max(...rooms.map(item => item.size));
        // this.setState({
        //     rooms,
        //     featuredRooms,
        //     sortedRooms: rooms,
        //     loading: false,
        //     price: maxPrice,
        //     maxPrice,
        //     maxSize
        // })
    }
    formatData = (items) => {
        let tempItems = items.data.map(item => {
            let id = item.id;
            let images = item.images.map(image => image.url);
            let room = {...item,images,id};
            return room;
        });
        return tempItems;
    }
    getRoom = (slug) => {
        let tempRooms = [...this.state.rooms];
        const room = tempRooms.find(room => room.slug === slug);
        return room;
    }
    handleChange = event => {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked :
        target.value
        const name = event.target.name;
        this.setState({
            [name]: value
        },this.filterRooms)
        //callback function ^
    }
    filterRooms = () => {
        let {
            rooms,type,capacity,price,minSize,maxSize,breakfast,pets
        } = this.state
        //all the rooms
        let tempRooms = [...rooms];
        //transform value
        capacity = parseInt(capacity);
        price = parseInt(price);
        //filter by type
        if (type !== 'all') {
            tempRooms = tempRooms.filter(room => room.type === type)
        }
        //filter by capacity
        if (capacity !== 1) {
            tempRooms = tempRooms.filter(room => room.capacity >= capacity)
        }
        //filter by price
        tempRooms= tempRooms.filter(room => room.price <= price )
        //filter extras
        if ( breakfast ) {
            tempRooms = tempRooms.filter(room => room.breakfast === true)
        }
        if ( pets ) {
            tempRooms = tempRooms.filter(room => room.pets === true)
        }
        this.setState({
            sortedRooms: tempRooms
        })
    }
    render() {
        return (
            <RoomContext.Provider 
                value={{
                    ...this.state,
                    getRoom: this.getRoom,
                    handleChange: this.handleChange
                }}
            >
                {this.props.children}
            </RoomContext.Provider>
        )
    }
}

const RoomConsumer = RoomContext.Consumer;

export function withRoomConsumer(Component) {
    return function ConsumerWrapper(props) {
        return <RoomConsumer>
            {value => <Component {...props} context={value}/>}
        </RoomConsumer>
    }
}

export{ RoomProvider, RoomConsumer, RoomContext };
