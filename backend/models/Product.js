import db from "../config/database.js";

// Get All Products
export const getProducts = (result) => {
    let sql = "SELECT * FROM products";
    db.query(sql, (err,results) => {
        if (err) {
            console.log(err);
            result(err, null); // First param is the errors, and the second is the results
        }else{
            result(null, results);
        }
    });
}

// Get Product with ID
export const getProduct = (id, result) => {
    let sql = "SELECT * FROM products WHERE id=?";
    db.query(sql, [id], (err, results) => {
        if (err) {
            console.log(err);
            result(err,null);
        }else{
            result(null, results[0]);
        }
    });
}

// Insert New Product
export const insertProduct = (data, result) => {
    let sql = "INSERT INTO products SET ?";
    db.query(sql, [data], (err,results) => {
        if (err) {
            console.log(err);
            result(err,null);
        }else{
            result(null,results);
        }
    });
}

// Update 
export const updateProductById = (data, id, result) => {
    let sql = "UPDATE products SET name=?,price=? WHERE id=?";
    db.query(sql,[data.name,data.price,id], (err,results) => {
        if (err) {
            console.log(err);
            result(err, null);
        }else{
            result(null, results);
        }
    });
}

// Delete
export const deleteProductById = (id, result) => {
    let sql = "DELETE FROM products WHERE id = ?";
    db.query(sql,[id],(err,results) => {
        if (err) {
            console.log(err);
            result(err,null);
        }else{
            result(null,results);
        }
    });
}