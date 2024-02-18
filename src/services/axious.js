
// export const  axiosInstance = axios.create({
//     baseURL: 'https://dummyjson.com/',
//   });


import axios from 'axios';
const baseURL = 'https://dummyjson.com/';

const axiosInstance = axios.create({
  baseURL: baseURL,
});

axiosInstance.interceptors.request.use(
  config => {
    
    return config;
  },
  error => {
    return Promise.reject(error);
  }
);

axiosInstance.interceptors.response.use(
  response => {
    return response;
  },
  error => {
    return Promise.reject(error);
  }
);

export default axiosInstance;
