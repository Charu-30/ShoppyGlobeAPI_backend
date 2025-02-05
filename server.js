import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import 'dotenv/config';
import productRoutes from "./Routes/products.route.js";
import cartRoutes from "./Routes/cart.route.js";
import authRoutes from "./Routes/auth.route.js";

// console.log(process.env.MONGO_URI);

// Initailize express app
const app= new express();

const PORT= process.env.PORT || 9000;
app.listen(PORT, ()=>{
    console.log(`Server is running on port ${PORT}`);
});

app.use(express.json());
app.use(cors());

mongoose.connect(process.env.MONGO_URI);

const db= mongoose.connection;

db.on("open", ()=>{
    console.log("Database connection is successful");
})

db.on("error", ()=>{
    console.log("Connection is not successful");
})


app.use('/api/products', productRoutes);
app.use('/api/cart', cartRoutes);
app.use('/api/auth', authRoutes);