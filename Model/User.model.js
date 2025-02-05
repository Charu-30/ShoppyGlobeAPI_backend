import mongoose from "mongoose";
import bcrypt from "bcrypt";

// Define the User Schema
const userSchema= new mongoose.Schema({
    username: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        lowercase: true
    },
    password: {
        type: String,
        required: true,
        minlength: 6,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    }
});

// Middleware to hash password before saving
userSchema.pre('save', async function (next) {
    if(!this.isModified('password')) return next();
    const salt= await bcrypt.genSalt(10);
    this.password= await bcrypt.hash(this.password, salt);
    next();  
})

// Method to compare passwords during login
userSchema.methods.comparePassword= async function (enteredPasswod) {
    return await bcrypt.compare(enteredPasswod, this.password);
}

const userModel= mongoose.model('User', userSchema);

export default userModel;