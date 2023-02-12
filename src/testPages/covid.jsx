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
          recipients: [{ phoneNumber: phoneNo, amount: 'KES 5' }],
          message: 'Thanks for your support!',
          enqueue: true
        },
        {
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            apiKey:
              'c88c6a64b9fec676fdb1d4df6cf31e9180e89be8174df6178b0141786bbce929'
          }
        }
      );

      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const phoneNo = event.target.phoneNo.value;
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

