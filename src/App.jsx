import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <main>
        <h1>Sample Form</h1>

        <form class="loginForm" method="post" action="http://127.0.0.1:5000/insert">

          <div class="orderIdField">
            <label for="orderId"><h2>Order Id</h2></label>
            <input type="text" id="orderId" name="orderId" placeholder='e.g 100'/>
          </div>

          <div class="descriptionField">
            <label for='description'><h2>Description</h2></label>
            <input type="text" id="description" name='description'/>
          </div>

          <div class="start_dateField">
            <label for='start_date'><h2>Start_Date</h2></label>
            <input type="date" id="start_date" name='start_date'/>
          </div>

          <div class="end_dateField">
            <label for='password'><h2>End_Date</h2></label>
            <input type="date" id="end_date" name='end_date'/>
          </div>

          <div class="workcenterField">
            <label for='workcenter'><h2>WorkCenter</h2></label>
            <input type="text" id="workcenter" name='workcenter'/>
          </div>

          <div class="AuthenticatorField">
            <label for='auth'><h2>Password</h2></label>
            <input type="password" id="auth" name='auth'/>
          </div>

          <button type='submit'>Submit </button>

        </form>
      </main>
    </>
  )
}

export default App
