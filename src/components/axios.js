import axios from axios;

const sendAirtime = async () => {
    try {
      const response = await axios.post('https://api.africastalking.com/version1/airtime/send', {
        // Add your API request data here
      }, {
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
  