import React from "react";
import ROOMS from "./datafile";

function RoomList({ rooms }) {
  const displayRooms = rooms || ROOMS;

  return (
    <div className="container" style={{ margin: "auto" }}>
      <h4 className="mb-4">Rooms List</h4>
      <table className="table table-striped table-hover w-100">
        <thead className="thead-dark">
          <tr>
            <th>Room Id</th>
            <th>Category</th>
            <th>Rate</th>
            <th>Availability Status</th>
          </tr>
        </thead>
        <tbody>
          {displayRooms.map((room) => (
            <tr key={room.roomid}>
              <td>{room.roomid}</td>
              <td>{room.category}</td>
              <td>${room.rate}</td>
              <td>{room.availability_status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default RoomList;
