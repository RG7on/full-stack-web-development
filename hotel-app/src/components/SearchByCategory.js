import React from "react";


function SearchByCategory() {
 
  return (
    <div>
      <div
        className="border border-success mb-5 mt-5 w-75"
        style={{ margin: "auto" }}
      >
        <table className="table table-striped">
          <tbody>
            <tr>
              <td>Room Category: </td>
              <td>
                <select >
                  <option value="Standard">Standard</option>
                  <option value="Deluxe">Deluxe</option>
                  <option value="Suite">Suite</option>
                </select>
              </td>
            </tr>
            <tr>
              <td colSpan="2">
                <button type="button">Show Rooms</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div>
        
      </div>
    </div>
  );
}

export default SearchByCategory;
