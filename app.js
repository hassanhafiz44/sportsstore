const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
require('dotenv').config();
const productsRoute = require('./routes/products');


const app = express();

// Instentiating middlewares
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));
app.use('/api/products', productsRoute);


mongoose.connect(
	process.env.DB_CONNECTION, 
	{
		useNewUrlParser: true,
		useUnifiedTopology: true
	},
	() => console.log('db connected'));

// Port initialization
const port = process.env.PORT || 3000;

// Run server
app.listen(port, () => console.log(`Listening at http://localhost:${port}`));

