const axios = require('axios');

async function requestAPI(q) {
  try {
    // Make a request to the API using axios
    const response = await axios.get(`https://savvytime.com/api/search/timezone?query=${q}`);
    
    // Extract data from the response
    const data = response.data;
    console.log(data,"datas")
    return data;
  } catch (error) {
    // If an error occurs, throw the error
    throw error;
  }
}

module.exports = requestAPI;
