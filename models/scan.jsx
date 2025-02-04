const mongoose = require('mongoose');

// ...existing code...
const scanSchema = new mongoose.Schema({
    scanID: { type: String, required: true, unique: true },
    productID: { type: String, required: true },
    userID: { type: String, required: true },
    timestamp: { type: Date, required: true },
    result: { type: String, required: true, enum: ['Verified', 'Fake'] }
});
// ...existing code...
const Scan = mongoose.model('Scan', scanSchema);

module.exports = Scan;
