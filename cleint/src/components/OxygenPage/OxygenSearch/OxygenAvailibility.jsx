import { useState } from 'react'
import { Table } from 'reactstrap'
import './OxygenAvailability.css'

import axios from 'axios';

function OxygenAvailibility() {

  const [area, setArea] = useState("");
  const [oxygenList, setOxygenList] = useState()
  console.log(oxygenList)
  const oxygenSearch = async () => {
    try {
      axios.get("http://localhost:3001/searchOxygen").then((response) => {
        setOxygenList(response.data);
      });
    } catch (error) {
      setOxygenList([])
    }
  };



  const RenderRow = oxygenList ? oxygenList.map((oxygenList) => {
    return (
      <tr>
        <td>{oxygenList.id}</td>
        <td >{oxygenList.dealerName}</td>
        <td>{oxygenList.phoneNum}</td>
        <td>{oxygenList.address}</td>
        <td>{oxygenList.available}</td>
      </tr>
    )
  }) : []

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
        onClick={oxygenSearch}>
        Search
      </button>

      {/* Rendering The table to show the data */}
      <div className='resultsTable'>
        <Table
          borderless
          hover
          responsive
        >
          <thead>
            <tr className='headerRow'>
              <td >Sr.No.</td>
              <td >Dealer Name</td>
              <td >Contact No</td>
              <td >Address</td>
              <td >Availibility</td>
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

export default OxygenAvailibility