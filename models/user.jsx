const mongoose = require('mongoose');

// ...existing code...
const userSchema = new mongoose.Schema({
    userID: { type: String, required: true, unique: true },
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    role: { type: String, required: true, enum: ['Manufacturer', 'Customer'] }
});
// ...existing code...
const User = mongoose.model('User', userSchema);

module.exports = User;
