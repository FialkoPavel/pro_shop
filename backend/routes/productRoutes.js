import express from "express";
import asyncHandler from 'express-async-handler'
import Product from "../models/productSchema.js";
import mongoose from "mongoose";

const router = express.Router();

router.get('/', asyncHandler(async(req, res) => {
    const products = await Product.find({})
    // res.status(404)
    // throw new Error('ERRRRROOOORRRR')

    res.json(products)
}))



router.get('/:id', asyncHandler(async (req, res) => {
    if(mongoose.Types.ObjectId.isValid(req.params.id)) {
        const product = await Product.findById(req.params.id)
        res.json(product)
    } else {
        res.status(404).json({  message: 'Product not found!' }) 
    }
    
}))

export default router