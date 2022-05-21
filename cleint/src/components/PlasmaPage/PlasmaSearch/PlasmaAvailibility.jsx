import { useState } from 'react'
// import { Button } from 'reactstrap'
import './PlasmaAvailability.css'

import Axios from 'axios';

function PlasmaAvailibility() {

  const [bloodGroup, setBloodGroup] = useState("");

  const search = () => {
    Axios.post("http://localhost:3001/bloodData", {
      bloodGroup: bloodGroup,
    }).then((res) => {
      console.log(res);
    });
  }

  return (
    <div>
      {/* Heading of the table */}
      <div className='heading'>
        Plasma Availability
      </div>

      <hr className='line' />

      {/* Saerch Table */}
      <div className='search'>
        <div className="hr">
          <h4>Search Plasma Stocks</h4>
        </div>
        <div className="select">
          <select name="bloodGroupType" className="form-control"
            onChange={(event) => {
              setBloodGroup(event.target.value);
            }}>
            <option value="-1">Select Blood Group </option>
            <option value="A+Ve">A+Ve</option>
            <option value="A+Ve">A+Ve</option>
            <option value="B+Ve">B+Ve</option>
            <option value="B-Ve">B-Ve</option>
            <option value="AB+Ve">AB+Ve</option>
            <option value="AB-Ve">AB-Ve</option>
            <option value="O+Ve">O+Ve</option>
            <option value="O-Ve">O-Ve</option>
            <option value="all">All Blood Groups</option>
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

export default PlasmaAvailibility