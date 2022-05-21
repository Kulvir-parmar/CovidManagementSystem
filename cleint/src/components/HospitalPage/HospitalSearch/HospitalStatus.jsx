import { useState } from 'react'
import './HospitalStatus.css'

// import axios from 'axios';

function HospitalStatus() {
  // const [hospitalList,sethospitalList] = useState("");
  const [region, setRegion] = useState("");

  const hospitalSearch = async() => {
    // axios.get("http://localhost:3001/searchHospital").then((response) => {
    //   setRegion(response.data);
    // });
    // console.log("success")
  };


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
              setRegion(event.target.value);
            }}>
            <option value="-1">Select your Region </option>
            <option value="Delhi">Delhi</option>
          </select>
        </div>
      </div>

      {/* Search button */}
      <button
        className='button'
        onClick={hospitalSearch}
        >
        Search
      </button>
    </div >
  )
}

export default HospitalStatus