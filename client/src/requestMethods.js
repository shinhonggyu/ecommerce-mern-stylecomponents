import axios from 'axios';

const BASE_URL = 'http://localhost:5000/api/';
const TOKEN =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxNDhlNTgxM2E5NmE3Y2RlMGM1YjQ1MiIsImlzQWRtaW4iOnRydWUsImlhdCI6MTYzMzQ4MjQ1MCwiZXhwIjoxNjMzNzQxNjUwfQ.EkTnG2-dfHkGZS7O2pdIk-d41SmiLkGp-K50nyzlbvM';

export const publicRequest = axios.create({
  baseURL: BASE_URL,
});

export const userRequest = axios.create({
  baseURL: BASE_URL,
  headers: {
    token: `Bearer ${TOKEN}`,
  },
});
