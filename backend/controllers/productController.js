import asyncHandler from 'express-async-handler'
import Product from "../models/productSchema.js";
import mongoose from "mongoose";

const getProducts = asyncHandler(async(req, res) => {
    const products = await Product.find({})
    // res.status(404)
    // throw new Error('ERRRRROOOORRRR')

    res.json(products)
});
 
const getProductById = asyncHandler(async (req, res) => {
    console.log('req.params.id', req.params.id, mongoose.Types.ObjectId.isValid(req.params.id))
    if(mongoose.Types.ObjectId.isValid(req.params.id)) {
        const product = await Product.findById(req.params.id)
        res.json(product)
    } else {
        res.status(404).json({  message: 'Product not found!' }) 
    }
    
})

export {
    getProducts, getProductById
}


  