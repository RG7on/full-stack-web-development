import React, { useState } from "react";
import ROOMS from "./datafile";
import RoomList from "./RoomList";

function SearchByCategory() {
  const [category, setCategory] = useState("Standard");
  const [filteredRooms, setFilteredRooms] = useState([]);
  const [searched, setSearched] = useState(false);

  const handleCategoryChange = (e) => {
    setCategory(e.target.value);
  };

  const handleSearch = () => {
    const filtered = ROOMS.filter((room) => room.category === category);
    setFilteredRooms(filtered);
    setSearched(true);
  };

  return (
    <div className="container">
      <h2 className="text-center mb-4">Search Rooms by Category</h2>
      <div className="card mb-4">
        <div className="card-body">
          <div className="row align-items-center">
            <div className="col-md-4">
              <label htmlFor="category" className="form-label">Room Category:</label>
            </div>
            <div className="col-md-4">
              <select
                id="category"
                className="form-select"
                value={category}
                onChange={handleCategoryChange}
              >
                <option value="Standard">Standard</option>
                <option value="Deluxe">Deluxe</option>
                <option value="Suite">Suite</option>
              </select>
            </div>
            <div className="col-md-4">
              <button className="btn btn-primary" onClick={handleSearch}>
                Show Rooms
              </button>
            </div>
          </div>
        </div>
      </div>
      {searched && (
        <div>
          <h3 className="mb-3">Search Results:</h3>
          {filteredRooms.length > 0 ? (
            <RoomList rooms={filteredRooms} />
          ) : (
            <p>No rooms found in the selected category.</p>
          )}
        </div>
      )}
    </div>
  );
}

export default SearchByCategory;
