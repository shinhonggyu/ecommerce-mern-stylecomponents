const express = require('express');
const app = express();
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const userRoute = require('./routes/users');
const authRoute = require('./routes/auth');
const productRoute = require('./routes/products');
const cartsRoute = require('./routes/carts');
const ordersRoute = require('./routes/orders');
const stripeRoute = require('./routes/stripe');
const cors = require('cors');

dotenv.config();

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => console.log('DBConnection Successfull!'))
  .catch((err) => console.log(err));

app.use(cors());
app.use(express.json());
app.use('/api/users', userRoute);
app.use('/api/auth', authRoute);
app.use('/api/products', productRoute);
app.use('/api/carts', cartsRoute);
app.use('/api/orders', ordersRoute);
app.use('/api/checkout', stripeRoute);

app.listen(process.env.PORT || 5000, () => {
  console.log('Backend server is running!');
});
