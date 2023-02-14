import React from 'react'
import './covid.css'
import axios from 'axios';

const Covid = () => {
  const sendAirtime = async (phoneNo) => {
    try {
      const response = await axios.post(
        '/api/version1/airtime/send',
        {
          username: 'sandbox',
          recipients: [{ "phoneNumber": phoneNo, "amount":"KES 10.00" }],
          message: 'Thanks for your support!'
        },
        {
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            apiKey:
              'a9ed9e6612622722c4a79220b8b770120f87ab4b0398cbbe2041a02d577aa21c',
           
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

