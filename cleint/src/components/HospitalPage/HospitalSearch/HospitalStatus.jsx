import { useState } from 'react'
import { Table } from 'reactstrap'
import './HospitalStatus.css'

import axios from 'axios';

function HospitalStatus() {
  const [hospitalList, sethospitalList] = useState(null);
  const [region, setRegion] = useState();

  // console.log("this is state" + hospitalList);

  // Don't Touch this function it is working I have no idea how this is working
  const hospitalSearch = async () => {
    try {
      axios.get("http://localhost:3001/searchHospital").then((response) => {
        sethospitalList(response.data);
      });
    } catch (error) {
      sethospitalList([])
    }
  };
  
  
  // POST API CALL TO FETCH DATA FROM THE SERVER
  // const hospitalSearch = () => {
  //   axios.post("http://localhost:3001/plasmaSearch", {
  //     region: region,
  //   }).then((res) => {
  //     sethospitalList(res.data);
  //     // console.log(sethospitalList);
  //   });
  // }


  const RenderRow = hospitalList ? hospitalList.map((hospitalList) => {
    return (
        <tr key={hospitalList.id}>
          <td >{hospitalList.hospitalid}</td>
          <td>{hospitalList.name}</td>
          <td>{hospitalList.phoneNum}</td>
          <td>{hospitalList.address}</td>
        </tr>
    )
  }) : []

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

      <div className='resultsTable'>
        <Table
          borderless
          hover
          responsive
        >
          <thead>
            <tr className='headerRow'>
              <td >Sr.No.</td>
              <td >Hospital</td>
              <td >Contact No.</td>
              <td >Address</td>
            </tr>
          </thead>
          <tbody>
              {RenderRow}
          </tbody>
        </Table>
      </div>
    </div >
  )
}

export default HospitalStatus