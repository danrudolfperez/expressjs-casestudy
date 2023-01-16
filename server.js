const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

require('dotenv').config();

const app = express();
// const port = process.env.PORT || 5000;
const port = 5000;

app.use(cors());
app.use(express.json());


const uri = process.env.ATLAS_URI;
// mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true } // useCreateIndex is not supported
mongoose.connect(uri, { useNewUrlParser: true}

);
const connection = mongoose.connection;
connection.once('open', () => {
  console.log("MongoDB database connection established successfully");
})

// Routes
const usersRouter = require('./routes/users');
const businessesRouter = require('./routes/businesses');
const productsRouter = require('./routes/products');
const inventoryRouter = require('./routes/inventory');

app.use('/users', usersRouter);
app.use('/businesses', businessesRouter);
app.use('/products', productsRouter);
app.use('/inventory', inventoryRouter);

app.get('/', (req, res) => {
  res.send('Hey this is my API running')
})

app.get('/test', (req, res) => {
  res.send('This is my test route..... ')
})

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});

module.exports = app;
