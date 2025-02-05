import mongoose from "mongoose";

const productSchema= new mongoose.Schema({
    imageUrl: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    description: {
        type: String
    },
    stock: {
        type: Number,
        default: 0
    }
});

const productModel= mongoose.model("Product", productSchema);

export default productModel;