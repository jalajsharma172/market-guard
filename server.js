
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();

// Middleware
app.use(express.json());
app.use(cors());

// Connect to MongoDB
mongoose
  .connect( 'mongodb+srv://jalajsharma172:jalajsharma172@jalaj.42f0p.mongodb.net/AskQuies', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.error("MongoDB Connection Error:", err));

// Define a Schema
const productSchema = new mongoose.Schema({
    productID: { type: String, required: true, unique: true },
   productName:{ type: String, required: true, unique: true },
   productPrice:{ type: Number, required: true, unique: true }
});
// ...existing code...
const product = mongoose.model('product', productSchema);


// API Routes
// app.get("/product", async (req, res) => {
//   const users = await product.find();
//   res.json(users);
// });

app.post("/addProduct", async (req, res) => {
  const newproduct = new product(req.body);
  await newproduct.save();
  res.json(newproduct);
});

// Start Server
const PORT =5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
