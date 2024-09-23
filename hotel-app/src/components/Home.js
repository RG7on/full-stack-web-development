import React from 'react'
import hotel from './hotel.jpg'
import RoomList from './RoomList'

function Home() {
  return (
    <div className="container">
      <h1 className="text-center mb-4">Welcome to Our Hotel</h1>
      <div className="row mb-4">
        <div className="col-md-12">
          <img src={hotel} className="img-fluid rounded" alt="Hotel" />
        </div>
      </div>
      <RoomList />
    </div>
  )
}

export default Home
