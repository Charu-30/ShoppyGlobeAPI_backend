import express from "express";
import { addToCart, updateCart, removeFromCart } from "../Controller/cartController.js";
import authenticateUser from "../Middleware/authenticateUser.js";
const router= express.Router();

router.post('/', authenticateUser, addToCart);
router.put('/:id', authenticateUser, updateCart);
router.delete('/:id', authenticateUser, removeFromCart);

export default router;