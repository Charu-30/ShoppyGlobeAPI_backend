import express from "express";
import { getProducts, getProductById, createProducts, updateProduct, deleteProduct } from "../Controller/productController.js";

const router= express.Router();

router.get('/', getProducts);
router.get('/:id', getProductById);
router.post('/', createProducts);
router.put('/:id', updateProduct);
router.delete('/:id', deleteProduct);

export default router;