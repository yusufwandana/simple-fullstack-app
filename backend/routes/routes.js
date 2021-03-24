import express from "express";

import { showProduct,showProducts,createProduct,updateProduct,deleteProduct } from "../controllers/ProductController.js";

const router = express.Router();

router.get('/', showProducts);
router.get('/products', showProducts);
router.get('/product/:id', showProduct);
router.post('/product', createProduct);
router.put('/product/:id', updateProduct);
router.delete('/product/:id', deleteProduct);

export default router;
