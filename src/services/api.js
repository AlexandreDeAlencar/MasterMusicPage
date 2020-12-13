// import axios from 'axios';
// import { API_URL } from '../utils/env.json';
// /* eslint import/no-cycle: [2, { maxDepth: 1 }] */
// import store from '../store';

// const api = axios.create({
//   baseURL: API_URL,
//   // baseURL: 'http://localhost:3333',
// });

// api.interceptors.request.use((config) => {
//   const { token } = store.getState().auth;

//   const headers = { ...config.headers };

//   if (token) {
//     headers.Authorization = `Bearer ${token}`;
//   }

//   return { ...config, headers };
// });

// export default api;
