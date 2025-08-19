import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [rows, setRows] = useState([])
  const [buttonState, setbuttonState] = useState(false)

  function handleSubmit(formData)
  {
      fetch("http://127.0.0.1:5000/insert", {

        method: "POST",
        headers: {},
        body: formData
      })
      .then(res=> res.json)
      .then(data=>console.log(data))
  }

  useEffect(()=>{
    console.log("triggered!")

    
    fetch("http://127.0.0.1:5000/display")
    .then(res=>res.json())
    .then(data=>setRows(data))

    document.getElementById("submitBtn").addEventListener("click",()=>{
      fetch("http://127.0.0.1:5000/display")
      .then(res=>res.json())
      .then(data=>setRows(data))
    })

  },[])


  return (
    <>
      <main>
        <h1>Sample Form</h1>

        <form className="loginForm" method="post" action={handleSubmit}>

          <div className="orderIdField">
            <label htmlFor="orderId"><h2>Order Id</h2></label>
            <input type="text" id="orderId" name="orderId" placeholder='e.g 100'/>
          </div>

          <div className="descriptionField">
            <label htmlFor='description'><h2>Description</h2></label>
            <input type="text" id="description" name='description'/>
          </div>

          <div className="start_dateField">
            <label htmlFor='start_date'><h2>Start_Date</h2></label>
            <input type="date" id="start_date" name='start_date'/>
          </div>

          <div className="end_dateField">
            <label htmlFor='password'><h2>End_Date</h2></label>
            <input type="date" id="end_date" name='end_date'/>
          </div>

          <div className="workcenterField">
            <label htmlFor='workcenter'><h2>WorkCenter</h2></label>
            <input type="text" id="workcenter" name='workcenter'/>
          </div>

          <div className="AuthenticatorField">
            <label htmlFor='auth'><h2>Password</h2></label>
            <input type="password" id="auth" name='auth'/>
          </div>

          <button type='submit' id="submitBtn">Submit </button>
        </form>
      </main>
      <table border="true" className="styled-table">
        <thead>
          <tr>
            <th>Order ID</th>
            <th>Description</th>
            <th>Start Date</th>
            <th>End Date</th>
            <th>Work Center</th>
            <th>Del</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row, index) => (
            <tr key={index}>
              <td>{row.orderId}</td>
              <td>{row.description}</td>
              <td>{new Date(row.start_date).toDateString()}</td>
              <td>{new Date(row.finish_date).toDateString()}</td>
              <td>{row.workcenter}</td>
              <td>X</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  )
}

export default App
