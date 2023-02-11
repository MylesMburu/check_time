import React, { useState } from 'react'
import PhoneInput from 'react-phone-number-input';
// import 'react-phone-number-input/tb.css';
import './tb.css'

function Tb () {
  // const [value,setValue] = useState();
  return (
<>
<div className="container">
    <form action="">
      <label htmlFor="name">Name</label>
      <input type="text"  name='name'/>

      <label htmlFor="natId">National ID</label>
      <input type="number"  name='natId'/>

      <label htmlFor="testNo">Test Number</label>
      <input type="number"  name='testNo'/>

      <label htmlFor="phoneNo">Phone Number</label>
       <input type="number"  name='phoneNo'/>


      <label htmlFor="date">Date</label>
      <input type="date"  name='date'/>

      <button>Submit</button>

    </form>

    </div>
</> 
 )
}

export default Tb