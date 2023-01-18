import express from 'express'
import products from './data/products.js'
import colors from 'colors'
import dotenv from 'dotenv'
import connectDB from './config/db.js'
import productRoutes from './routes/productRoutes.js'

dotenv.config()

connectDB()

const app = express()

app.use((err, req, res, next) => {

    const statusCode = res.status === 200 ? 500 : res.status
    res.status(statusCode)
    
    res.json({
        message: err.message,
        stack: process.env.NODE_ENV === 'PRODUCTION' ? null : err.stack
    })
      
    next(err)
})

app.get('/', (req, res) => {
    res.send('API is running...')
})

app.use('/api/products', productRoutes)

const PORT = process.env.PORT || 4000;

app.listen(PORT, console.log(`Server running on port ${PORT}`.yellow.bold))