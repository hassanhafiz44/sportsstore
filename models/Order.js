const mongoose = require('mongoose');

const OrderSchema = mongoose.Schema({
	name: {
		type: String,
		required: true
	},
	address: {
		type: String,
		required: true
	},
	state: {
		type: String,
		required: true
	},
	country: {
		type: String,
		required: true
	},
	zip: {
		type: String,
		required: true
	},
	products: {
		type: Array
	}
});

module.exports = mongoose.model('Orders', OrderSchema);
