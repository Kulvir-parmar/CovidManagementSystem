// import { useState } from 'react'
import { Table } from 'reactstrap'
import './PlasmaTable.css'

// import Axios from 'axios'

function PlasmaTable() {
  return (
    <div className='resultsTable'>
      <Table
        borderless
        hover
        responsive
      >
        <thead>
          <tr className='headerRow'>
            <td >Sr.No.</td>
            <td >Blood Bank</td>
            <td >Category</td>
            <td >Availability</td>
            <td >Type</td>
          </tr>
        </thead>
      </Table>
    </div>
  )
}
export default PlasmaTable