import axios from axios;

const phoneNo = document.getElementById('phoneNo').value;

const sendAirtime = async () => {
    try {
      const response = await axios.post('https://api.africastalking.com/version1/airtime/send',
       {
        username: 'your-africastalking-username',
        recipients: [
          { phoneNumber: phoneNo, amount: 'KES 5' }
        ],
        message: 'Thanks for your support!',
        enqueue: true }, 
        {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
          'apiKey': 'c88c6a64b9fec676fdb1d4df6cf31e9180e89be8174df6178b0141786bbce929',
        },
      });
  
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };
  