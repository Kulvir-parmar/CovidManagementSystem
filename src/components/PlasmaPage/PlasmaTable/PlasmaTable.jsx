import { useState } from 'react'
import { Table } from 'reactstrap'
import './PlasmaTable.css'

import Axios from 'axios'

function PlasmaTable() {
  const [response,setResponse] = useState()
  // const list = ()=>{}

  
  function RenderRow(props) {
    return (
      <tbody>
        <tr>
          <td >{response}</td>
          <td>{response}</td>
          <td>{response}</td>
          <td>{response}</td>
          <td>{response}</td>
        </tr>
      </tbody>
    )
  }
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
        <RenderRow />
      </Table>
    </div>
  )
}
export default PlasmaTable