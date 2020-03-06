/* eslint-disable no-unused-vars */
import React, { Component } from 'react';
import axios from 'axios'

const RoomContext = React.createContext();
// 

class RoomProvider extends Component {
    state={
        rooms: [],
        sortedRooms: [],
        featuredRooms: [],
        loading: true,
        roomtype:'all',
        capacity:1,
        price:0,
        minPrice: 0,
        maxPrice: 0,
        minSize: 0,
        maxSize: 0,
        breakfast: false,
        PUBLICTOKEN: 'f3341f2f85860e06446a5e86bfd392',
        authenticated: null,
        chatUserId: 'guido',
        activeWindow: ''
    }
    componentDidMount(){
        const self = this;
        axios({
            url: 'https://graphql.datocms.com/',
            method: 'post',
            data: {
              query: `{
                allRooms {
                    id
                    name
                    slug
                    price
                    roomtype
                    size
                    capacity
                    breakfast
                    pets
                    featured
                    description
                    extras
                    images {
                      url
                    }
                  }
                }`
            },
            headers: { 'Content-Type': 'application/json', 'Accept': 'application/json', 'Authorization': `Bearer ${this.state.PUBLICTOKEN}`,}
          })
        .then(function (response) {
          // handle success
          let rooms = self.formatData(response.data.data.allRooms);
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
          return rooms
        }).catch(error => {
            console.log(error)
        })
    }
    formatData = (items) => {
        let tempItems = items.map(item => {
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

    changeWindow = (window) => {
        this.setState({
            activeWindow: window
        })
    }

    logOut = () => {
        localStorage.removeItem('userData');
        this.setState({authenticated: false}) 
    }

    updateCredentials = (refresh, userId, email, token) => {
        if (refresh === true) {
            const userData = JSON.parse(localStorage.getItem('userData'));
            if (userData && userData !== null) {
                axios({
                    url: 'https://express-login.now.sh/api/users/refresh',
                    method: 'POST',
                    data: JSON.stringify({
                        email: userData.email
                    }),
                    headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${userData.token}`}
                })
                .then(res => {
                    localStorage.setItem('userData', JSON.stringify({userId: res.data.userId, email: res.data.email, token: res.data.token}));
                    this.setState({authenticated: true})
                })
                .catch(err => {
                    localStorage.removeItem('userData');
                    this.setState({authenticated: false})    
                })
            } else {
                this.setState({authenticated: false})
            }
        } else {
            localStorage.setItem('userData', JSON.stringify({userId: userId, email: email, token: token}));
            this.setState({
                authenticated: true
            })
        }
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
            rooms,roomtype,capacity,price,minSize,maxSize,breakfast,pets
        } = this.state
        //all the rooms
        let tempRooms = [...rooms];
        //transform value
        capacity = parseInt(capacity);
        price = parseInt(price);
        //filter by type
        if (roomtype !== 'all') {
            tempRooms = tempRooms.filter(room => room.roomtype === roomtype)
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
                    handleChange: this.handleChange,
                    updateCredentials: this.updateCredentials,
                    logOut: this.logOut,
                    changeWindow: this.changeWindow
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
