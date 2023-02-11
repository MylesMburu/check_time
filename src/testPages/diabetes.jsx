import React from 'react'
import './diabetes.css'

const Diabetes = () => {
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
      <input type="tel"  name='phoneNo'/>

      <label htmlFor="date">Date</label>
      <input type="date"  name='date'/>

      <button>Submit</button>

    </form>

    </div>
    </>
  )
}

export default Diabetes