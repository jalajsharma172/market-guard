const mongoose = require("mongoose");
mongoose.connect("mongodb+srv://jalajsharma172:jalajsharma172@supplyguard.rzukn.mongodb.net/supply").then(()=>{
    console.log("DB connected");
    
});
const ProductsSchema=new mongoose.Schema({
    // ID:Number,
    name: {
        type: String,
        required: true,
    }
    // Price :Number,
    // IMG:String

});
const Productdb=mongoose.model('product',ProductsSchema);

module.exports={
    Productdb
}
