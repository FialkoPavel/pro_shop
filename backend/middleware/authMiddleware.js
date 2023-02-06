import jwt from 'jsonwebtoken'
import User from '../models/userSchema.js'

const authTokenCheck = async(req, res, next) => {
    let token
    if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
        try {
            token = req.headers.authorization.split(' ')[1]
            const decode = jwt.verify(token, process.env.TOKEN_SECRET)
            req.user = await User.findById(decode.id).select('-password')
        } catch (error) {
            console.error(error)
            res.status(401)
            throw new Error('Not autorized, token failed!!!')
        }
    }

    if (!token) {
        res.status(401)
        throw new Error('No token!')
    }

    next()
}

export default authTokenCheck