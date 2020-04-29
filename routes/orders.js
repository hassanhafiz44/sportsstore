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

router.get('/:id', async (req, res) => {
	try {
		const order = await Order.findById(req.params.id);
		res.json(order);
	} catch (error) {
		res.status(400).json(error);
	}
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

router.delete('/:id', async (req, res) => {
	try {
		const acknowledgement = await Order.deleteOne({ _id: req.params.id });
		res.json(acknowledgement);
	} catch (error) {
		res.status(400).json(error);
	}
});

router.put('/:id', (req, res) => {
	res.status(501).end();
});

module.exports = router;

