import User from "./models/userSchema.js";
import Product from "./models/productSchema.js";
import Order from "./models/orderSchema.js";
import dotenv from 'dotenv'
import users from '../backend/data/users.js'
import products from '../backend/data/products.js'
import connectDB from './config/db.js'
import colors from 'colors'

dotenv.config()

connectDB()

const importData = async() => {
    try {
        await Product.deleteMany()
        await Order.deleteMany()
        await User.deleteMany()

        const createdUsers = await User.insertMany(users)

        const adminUser = createdUsers[0]._id

        const sampleProducts = await products.map(item => {
            return {...item, user: adminUser}
        })

        await Product.insertMany(sampleProducts)

        console.log('Imported data'.green.bold)
        process.exit()
    } catch(e) {
        console.error(`${e}`.red.bold)
        process.exit(1)
    }
}

const destroyData = async() => {
    try {
        await Product.deleteMany()
        await Order.deleteMany()
        await User.deleteMany()

        console.log('Destroyed data')
        process.exit()
    } catch(e) {
        console.error(`${e}`.red.bold)
        process.exit(1)
    }
}

if(process.argv[2] === '-d') {
    destroyData()
} else {
    importData()
}