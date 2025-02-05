import productModel from "../Model/Product.model.js";
import cartModel from "../Model/Cart.model.js";

// Add a product to the cart
export async function addToCart(req, res){
    const {productId, name, quantity}= req.body;

    try{
        const product= await productModel.findById(productId);
        if(!product){
            return res.status(404).json({message: 'Product not found'});
        }
        let cart= await cartModel.findOne({userId: req.user.id});

        if(!cart){
            cart= new cartModel({userId: req.user.id, products: [{productId, name, quantity}]});
        }
        const cartItemIndex= cart.products.findIndex((item)=> item.productId.toString()===productId);

        if(cartItemIndex>-1){
            cart.products[cartItemIndex].quantity+=quantity;
        }
        else{
            cart.products.push({productId, name,  quantity});
        } 

        await cart.save();
        res.status(200).json({message: 'Product addded to cart', cart});
    }catch(error){
        res.status(500).json({message: 'Server Error: Unable to add product to cart'});
    }
}

// Update the quantity of a product in the cart
export async function updateCart(req, res){
    const {quantity}= req.body;

    try{
        const cart= await cartModel.findOne({userId: req.user.id});
        if(!cart){
            return res.status(404).json({message: 'Item not found'});
        }

        const cartItemIndex= cart.products.findIndex((item)=>item.productId.toString()===req.params.id);

        if(cartItemIndex>-1){
            cart.products[cartItemIndex].quantity=quantity;
            await cart.save();
            res.status(200).json({message: 'Cart updated', cart});
        }
        else{
            res.status(404).json({message: 'Product not found in cart'});
        }
    }catch(error){
        res.status(500).json({message: 'Server Error: Unable to update cart'});
    }
}

// Remove a product from the cart
export async function removeFromCart(req, res) {
    try{
        const cart= await cartModel.findOne({userId: req.user.id});
        if(!cart){
            return res.status(404).json({message: 'Item not found'});
        }

        cart.products= cart.products.filter((item)=> item.productId.toString()!==req.params.id);
        await cart.save();
        res.status(200).json({message: 'Product removed from cart', cart});
    }catch(error){
        res.status(500).json({message: 'Server Error: Unable to remove product from cart'});
    }
}

