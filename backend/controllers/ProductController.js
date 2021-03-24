// Import function from Model
import { getProducts,getProduct,insertProduct,updateProductById,deleteProductById } from "../models/Product.js";

// Get All Products
export const showProducts = (req,res)=>{
    getProducts((err,results) => {
        if (err) {
            res.send(err);
        }else{
            res.json(results)
        }
    });
}

// Get a Product
export const showProduct = (req,res) => {
    let id = req.params.id;
    getProduct(id, (err,results) => {
        if (err) {
            res.send(err);
        }else{
            res.json(results);
        }
    });
}

// Create a New Product
export const createProduct = (req,res) => {
    const data = req.body;
    insertProduct(data, (err,results) => {
        if (err) {
            res.send(err);
        }else{
            res.json(results);
        }
    });
}

// Update Product
export const updateProduct = (req,res) => {
    const id = req.params.id;
    const data = req.body;
    updateProductById(data, id, (err,results) => {
        if (err) {
            res.send(err);
        }else{
            res.json(results);
        }
    });
}

// Delete product
export const deleteProduct = (req,res) => {
    const id = req.params.id;
    deleteProductById(id, (err,results) => {
        if (err) {
            res.send(err);
        }else{
            res.json(results);
        }
    });
}