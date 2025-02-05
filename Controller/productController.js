import productModel from "../Model/Product.model.js";

// Create a new product
export async function createProducts(req, res) {
    try{
        const {name, price, description, stock, imageUrl}= req.body;
        const newProduct= new productModel({
            name, price, description, stock, imageUrl
        });
        await newProduct.save();
        res.status(201).json({message: "Product created", product: newProduct});
    }catch(error){
        res.status(500).json({error: "Server error: Failed to create product"});
    }
}

// Fetch all products
export async function getProducts(req, res){
    try{
        const products= await productModel.find();
        res.status(200).json(products);
    }catch(error){
        res.status(500).json({message: 'Server Error: Unable to fetch products'});
    }
};

// Fetch a single product by ID
export async function getProductById(req, res){
    try{
        const product= await productModel.findById(req.params.id);
        if(!product){
            return res.status(404).json({message: 'Product not found'});
        }
        res.status(200).json(product);
    }catch(error){
        res.status(500).json({message: 'Server Error : Uable to fetch product'});
    }
}

// Update a product by ID
export async function updateProduct(req, res){
    try{
        const updatedProduct= await productModel.findByIdAndUpdate(req.params.id, req.body);
        if(!updatedProduct){
            return res.status(404).json({error: "Product not found"});
        }
        res.status(200).json({message: "Product Updated", product: updatedProduct});
    }catch(error){
        res.status(500).json({error: "Server Error: Failed to update product"});
    } 
}

// Delete a product by ID
export async function deleteProduct(req, res) {
    try{
        const deletedProduct= await productModel.findByIdAndDelete(req.params.id);
        if(!deletedProduct){
            return res.status(404).json({error: "Product not found"});
        }
        res.status(200).json({message: "Product deleted"});
    }catch(error){
        res.status(500).json({error: "Server Error: Failed to delete product"});
    }
}



