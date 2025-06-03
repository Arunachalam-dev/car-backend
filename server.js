const express = require('express');
const app = express();
const port = process.env.PORT || 2010;
const dbconnection = require('./db');
const cors = require('cors');
const path = require('path');
const dotenv = require('dotenv');
const stripeRoutes = require('./Routers/PaymentIntentroute');

dotenv.config();

app.use(cors({
  origin: 'stellar-medovik-951992.netlify.app',
  methods: ['POST', 'GET'],
  credentials: true,
}));

app.use(express.json());

// Routes
app.use('/api/cars', require('./Routers/carrouter'));
app.use('/api/users', require('./Routers/userroute'));
app.use('/api/bookings', require('./Routers/bookingrouter'));
app.use('/api/stripe', stripeRoutes);

// Static files
app.use(express.static(path.join(__dirname, 'client/build')));


// Health check
app.get('/', (req, res) => {
  res.send("hello Arun");
});

app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
});


process.on('uncaughtException', err => {
  console.error('Uncaught Exception:', err.stack || err.message);
});

app.listen(port, () => console.log(`server is ready on ${port}`));
