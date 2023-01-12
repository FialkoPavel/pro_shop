import express from 'express'
import products from './data/products.js'
import colors from 'colors'
import dotenv from 'dotenv'
import connectDB from './config/db.js'

dotenv.config()

connectDB()

const app = express()

app.get('/api/products', (req, res) => {
    res.json(products)
})

app.get('/api/product/:id', (req, res) => {
    const product = products.find(item => item._id === req.params.id)
    res.json(product)
})

const PORT = process.env.PORT || 4000;

app.listen(PORT, console.log(`Server running on port ${PORT}`.yellow.bold))