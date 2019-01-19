import http from 'k6/http';
import { sleep, check } from 'k6';

 export const options = {
  vus: 100,
  rps: 1000,
  duration: '5m',
};

 export default function() {
  const randomId = Math.floor(Math.random() * (10000000 - 8000000 + 1)) + 8000000;
  // const response = http.get(`http://localhost:3000/api/restaurants/${randomId}/reviews`);    // reviews proxy
  const response = http.post(`http://localhost:3000/api/restaurants/${randomId}/reviews`);      // reviews proxy
  check(response, {
    // "status was 200": (r) => r.status == 200,    // for GET requests
    "status was 201": (r) => r.status == 201,       // for POST requests
    "transaction time OK": (r) => r.timings.duration < 2000
  });
  // sleep(0.05);
};
