import userModel from "../Model/User.model.js";
import jwt from "jsonwebtoken";

// Register a new user
export async function registerUser(req, res){
    const {username, email, password}= req.body;
    try{
        const userExists= await userModel.findOne({email});
        if(userExists){
            return res.status(400).json({message: 'User already exists'});
        }
        
        const newUser= new userModel({
            username,
            email,
            password,
        });

        await newUser.save();
        res.status(201).json({message: 'User registered successfully'});
    }catch(error){
        res.status(500).json({message: 'Server Error: Unable to register user'});
    }
};

// Login user and generate a JWT token
export async function loginUser(req, res) {
    const {email,password}= req.body;

    try{
        const user= await userModel.findOne({email});
        if(!user){
            return res.status(404).json({message: 'Invalid email'});
        }

        const isPasswordValid= await user.comparePassword(password);
        if(!isPasswordValid){
            return res.status(401).json({message: 'Invalid email or password'});
        }

        const token= jwt.sign({id: user._id}, process.env.JWT_SECRET, {expiresIn: '1hr'});
        res.status(200).json({message: 'Login successful', token});
    }catch(error){
        res.status(500).json({message: 'Server Error: Unable to login user'});
    } 
}