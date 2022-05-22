import { useState } from 'react'
import { Table } from 'reactstrap'
import './PlasmaAvailability.css'

import Axios from 'axios';

function PlasmaAvailibility() {

  const [bloodGroup, setBloodGroup] = useState("");
  const [bloodData, setBloodData] = useState();

  // API to fetch data from the server
  const searchPlasma = () => {
    Axios.post("http://localhost:3001/plasmaSearch", {
      bloodGroup: bloodGroup,
    }).then((res) => {
      setBloodData(res.data);
      console.log(bloodData);
    });
  }

  // Function to render rows of the table
  const RenderRow = bloodData ? bloodData.map((bloodData) => {
    return (
      <tr key={bloodData.idplasma}>
        <td>{bloodData.idplasma}</td>
        <td >{bloodData.name}</td>
        <td>{bloodData.bloodGroup}</td>
        <td>{bloodData.phoneNum}</td>
        <td>{bloodData.adhaarNum}</td>
      </tr>
    )
  }) : []

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
            <option value="A+">A+Ve</option>
            <option value="A-">A-Ve</option>
            <option value="B+">B+Ve</option>
            <option value="B-">B-Ve</option>
            <option value="AB+">AB+Ve</option>
            <option value="AB-">AB-Ve</option>
            <option value="O+">O+Ve</option>
            <option value="O-">O-Ve</option>
            <option value="all">All Blood Groups</option>
          </select>
        </div>
      </div>

      {/* Search button */}
      <button
        className='button'
        onClick={searchPlasma}
      >
        Search
      </button>

      {/* Result Table to show the response from server */}
      <div className='resultsTable'>
        <Table
          borderless
          hover
          responsive
        >
          <thead>
            <tr className='headerRow'>
              <td >Sr.No.</td>
              <td >Name</td>
              <td >Blood Group</td>
              <td >Contact No</td>
              <td >Adhaar No</td>
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

export default PlasmaAvailibility