import React from 'react'

export default function ChatRoomButton(props) {
    const rawId = props.room.id;
    const idLength = rawId.length - 9;
    const Id = rawId.substring(0, idLength);

    const rawDate = props.room.createdAt;
    const splitDate = rawDate.split('T');
    const Date = splitDate[0];
    const Time = splitDate[1].substring(0,5);
    return (
        <div>
            <li className="chat-room" key={props.room.id}>
                <h5>{Id}</h5>
                <p>{Date}</p>
                <p>{Time}</p>
                <div className="to-chat-btn">
                    <button value={props.room.id} onClick={props.onClick}>></button>
                </div>
            </li>
        </div>
    )
}
