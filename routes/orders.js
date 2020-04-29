const express = require('express');
const Order = require('../models/Order.js');

const router = express.Router();

router.get('/', async (req, res) => {
	try {
		const orders = await Order.find();
		res.json(orders);
	} catch (error) {
		res.status(400).json(error);
	}
});

router.get('/:id', (req, res) => {
	res.status(501).end();
});

router.post('/', async (req, res) => {
	const order = { name, address, state, country, zip, products } = req.body;
	try {
		await Order.validate(order, ['name', 'address', 'state', 'country', 'zip']);
		const newOrder = new Order(order);
		const savedOrder = await newOrder.save();
		res.json(savedOrder);
	} catch (error) {
		res.status(400).json(error);
	}
});

router.delete('/:id', (req, res) => {
	res.status(501).end();
});

router.put('/:id', (req, res) => {
	res.status(501).end();
});

module.exports = router;

