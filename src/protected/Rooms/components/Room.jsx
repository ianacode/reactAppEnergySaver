import * as React from "react";
import "./Room.css";
const Room = ({room}) => {
  return (
    <div className={`component-13 component-13-instance-1"`}>
      <img className="image" src={room.img} />
      <span className="room">{room.room_name}</span>
      <span className="num-15-devices">
        {room.devices && room.devices.length}
      </span>
    </div>
  );
};
export default Room;
