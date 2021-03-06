/* eslint-disable no-unused-vars */
import React, { useContext } from 'react'
import { RoomConsumer, RoomContext } from '../context'
import Title from '../components/Title'


//get all unique values
const getUnique = (items,value) => {
    console.log(items)
    return [...new Set(items.map(item => item[value]))]
}

export default function RoomsFilter({rooms}) {
    const context = useContext(RoomContext);
    const {
        handleChange,roomtype,capacity,price,minPrice,maxPrice,minSize,maxSize,breakfast,pets
    } = context;
    //get unique types
    let types = getUnique(rooms, 'roomtype');
    //add all type
    types = ['all',...types]
    //map to jsx
    types = types.map((item,index) => {
        return <option value={item} key={index}>{item}</option>
    })

    let people = getUnique(rooms, 'capacity');
    people= people.map((item,index) => {
        return <option key={index} value={item}>{item}</option>
    })

    return (
        <section className="filter-container">
            <Title title="Buscar Habitaciones"/>
            <form className="filter-form">
                {/*select type*/}
                <div className="form-group">
                    <label htmlFor="type">Tipo</label>
                    <select 
                        name="roomtype" 
                        id="type" 
                        value={roomtype} 
                        className="form-control" 
                        onChange={handleChange}
                    >
                    {types}
                    </select>
                </div>
                {/*end select type*/}
                {/*guests*/}
                <div className="form-group">
                    <label htmlFor="capacity">Capacidad</label>
                    <select 
                        name="capacity" 
                        id="capacity" 
                        value={capacity} 
                        className="form-control" 
                        onChange={handleChange}
                    >
                    {people}
                    </select>
                </div>
                {/*end guests*/}
                {/*room price */}
                <div className="form-group">
                    <label htmlFor="price">
                        Precio ${price}
                    </label>
                    <input type="range" name="price" min={minPrice} max={maxPrice} id="price" value={price} onChange={handleChange}
                    className="form-control" />
                </div>
                {/* end of room price */}
                {/*extras */}
                    <div className="form-group">
                        <div className="single-extra">
                            <input type="checkbox" name="breakfast" id="breakfast" checked={breakfast} onChange={handleChange}/>
                            <label htmlFor="breakfast">Desayuno</label>
                        </div>
                        <div className="single-extra">
                            <input type="checkbox" name="pets" id="pets" checked={pets} onChange={handleChange}/>
                            <label htmlFor="pets">mascotas</label>
                        </div>
                    </div>
                {/*end of extras */}
            </form>
        </section>
    )
}
