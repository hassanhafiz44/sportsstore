const express = require('express');
const Product = require('../models/Product.js');

const router = express.Router();

router.get('/', async (req, res) => {
	try {
		const products = await Product.find();
		res.json(products);
	} catch (error) {
		res.status(400).json(error);
	}
});

router.get('/:id', async (req, res) => {
	try {
		const product = await Product.findById({_id: req.params.id});
		res.json(product);
	} catch (error) {
		res.status(400).json(error);
	}
});

router.post('/', async (req, res) => {
	const product = { name, description, category, price } = req.body;
	try {
		await Product.validate(product, ['name', 'description' , 'category', 'price']);
		const newProduct = new Product(product);
		const savedProduct = await newProduct.save();
		res.json(savedProduct);
	} catch (error) {
		res.status(400).json(error);
	}
});

router.delete('/:id', async (req, res) => {
	try {
		const acknowledgement = await Product.deleteOne({ _id: req.params.id });
		res.json(acknowledgement);
	} catch (error) {
		res.status(400).json(error);
	}
});

router.put('/:id', async (req, res) => {
	const oldProduct = { name, description, category, price} = req.body;
	try {
		const result = await Product.updateOne({_id: req.params.id}, oldProduct);
		res.send(result);
	} catch (error) {
		res.status(400).json(error);
	}
});

module.exports = router;

