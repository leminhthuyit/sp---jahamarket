import axios from 'axios';

const request = axios.create({
  baseURL: 'https://jm-api-json-server.herokuapp.com/api',
  headers: {
    'Content-Type': 'application/json',
  },
});

// export const get = async (past, option) => {
//   const response = await request.get(past, option);
//   return response.data;
// };

export default request;
