import React from 'react'
import './covid.css'
// import axios from 'axios';
import instance from '../axiosInstance';
import axios from 'axios';

const Covid = () => {
  const sendAirtime = async (phoneNo) => {
    try {
      const response = await axios.post('api/version1/airtime/send',
        {
          username: 'myles',
          recipients: [{ 
            "phoneNumber": phoneNo,
           currencyCode: "KES",
          amount: "100" 
        }],
          message: 'Thank you for gettting tested with us'
        } ,
        {
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            'apiKey': '6f1e252ea22e185504ce3d23fc3c3a801a2459077a67420ea24d894b59447d7d',
          }
        },
        
        console.log('Success!')
      );
      console.log(typeof(phoneNo))

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
    // const element = document.getElementById(" form ");
    event.target.reset()
  }; 

  return (
    <>
      <div className="container">
        <form id='form' onSubmit={handleSubmit} >
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

