const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const ProductSchema = new Schema({
    name: String,
    description: String,
    banner: String,
    type: String,
    unit: Number,
    price: Number,
    isAvailable: Boolean,
    suplier: String
});

module.exports =  mongoose.model('product', ProductSchema);