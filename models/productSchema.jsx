const mongoose = require('mongoose');

// ...existing code...
const productSchema = new mongoose.Schema({
    productID: { type: String, required: true, unique: true },
    imageURL: { type: String, required: true },
    description: { type: String, required: true },
    tags: { type: [String], required: true }
});
// ...existing code...
const product = mongoose.model('product', productSchema);

module.exports = product;
