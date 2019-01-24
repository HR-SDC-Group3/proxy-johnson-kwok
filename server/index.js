require('newrelic');
const express = require('express');
const proxy = require('http-proxy-middleware');
const morgan = require('morgan');

const app = express();

app.use(morgan('tiny'));
app.use('/restaurants/:id/', express.static(`${__dirname}/../client/dist/`));

// app.use('/api/reservations/restaurantID=:restaurantID&date=:date', proxy({ target: 'http://18.144.29.119:3002', changeOrigin: true }));
// app.use('/api/reservations/', proxy({ target: 'http://18.144.29.119:3002', changeOrigin: true }));
app.use('/api/restaurants/:id/reviews', proxy({ target: 'http://13.57.23.184:3004', changeOrigin: true }));
// app.use('/api/restaurants/:id/menu', proxy({ target: 'http://18.218.178.24:3001', changeOrigin: true }));
// app.use('/api/restaurants/:id/photos', proxy({ target: 'http://54.153.94.82:3003', changeOrigin: true }));

const port = 3000;
app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});