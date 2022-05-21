import { useState } from 'react'
// import { Button } from 'reactstrap'
import './OxygenAvailability.css'

import Axios from 'axios';

function OxygenAvailibility() {

  const [area, setArea] = useState("");

  const search = () => {
    Axios.post("http://localhost:3001/", {
      area: area
    }).then((res) => {
      console.log(res);
    });
  }

  return (
    <div>
      {/* Heading of the table */}
      <div className='heading'>
        Oxygen Availability
      </div>

      <hr className='line' />

      {/* Saerch Table */}
      <div className='search'>
        <div className="hr">
          <h4>Search Oxygen Stocks</h4>
        </div>
        <div className="select">
          <select name="bloodGroupType" className="form-control"
            onChange={(event) => {
              setArea(event.target.value);
            }}>
            <option value="-1">Select your region </option>
            <option value="Delhi">Delhi</option>
          </select>
        </div>
      </div>

      {/* Search button */}
      <button
        className='button'
        onClick={search}>
        Search
      </button>
    </div >
  )
}

export default OxygenAvailibility