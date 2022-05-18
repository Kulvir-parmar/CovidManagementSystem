import { useState } from 'react'
import './HospitalStatus.css'

import Axios from 'axios';

function HospitalStatus() {

  const [area, setArea] = useState("");

  const search = () => {
    Axios.post("http://localhost:3001/", {
      area: area,
    }).then((res) => {
      console.log(res);
    });
  }

  return (
    <div>
      {/* Heading of the table */}
      <div className='heading'>
        Hospitals
      </div>

      <hr className='line' />

      {/* Saerch Table */}
      <div className='search'>
        <div className="hr">
          <h4>Select Your Region</h4>
        </div>
        <div className="select">
          <select name="region" className="form-control"
            onChange={(event) => {
              setArea(event.target.value);
            }}>
            <option value="-1">Select your Region </option>
            <option value="Delhi NCR">Delhi NCR</option>
            <option value="Delhi East">Delhi East</option>
            <option value="Delhi West">Delhi West</option>
            <option value="Delhi North">Delhi North</option>
            <option value="Delhi South">Delhi South</option>
            <option value="all">Whole City</option>
          </select>
        </div>
      </div>

      {/* Search button */}
      <button
        className='button'
        onClick={search}
        >
        Search
      </button>
    </div >
  )
}

export default HospitalStatus