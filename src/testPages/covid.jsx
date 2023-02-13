import React from 'react'
import './covid.css'
import axios from 'axios';

const Covid = () => {
  const sendAirtime = async (phoneNo) => {
    try {
      const response = await axios.post(
        'https://api.sandbox.africastalking.com/version1/airtime/send',
        {
          username: 'sandbox',
          recipients: [{ phoneNumber: phoneNo, currencyCode: "KES",
          amount: 5 }],
          message: 'Thanks for your support!',
          enqueue: true
        },
        {
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            'apiKey':
              '8aa287ffda67312cee36e9a29ac1699df63832671812c302d08169c4b63eee4a',
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
          }
        },
        console.log('Success!')
      );

      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const phoneNo = event.target.phoneNo.value;
    console.log(phoneNo)
    sendAirtime(phoneNo);
  };

  return (
    <>
      <div className="container">
        <form onSubmit={handleSubmit}>
          <label htmlFor="name">Name</label>
          <input type="text" name="name" />

          <label htmlFor="natId">National ID</label>
          <input type="number" name="natId" />

          <label htmlFor="testNo">Test Number</label>
          <input type="number" name="testNo" />

          <label htmlFor="phoneNo">Phone Number</label>
          <input type="tel" name="phoneNo" />

          <label htmlFor="date">Date</label>
          <input type="date" name="date" />

          <button type="submit">Submit</button>
        </form>
      </div>
    </>
  );
};

export default Covid;

