import jwt from 'jsonwebtoken'

const authTokenCheck = (req, res, next) => {
    let token
    if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
        try {
            token = req.headers.authorization.split(' ')[1]
            const decode = jwt.verify(token, process.env.TOKEN_SECRET)

        } catch (error) {
            console.error(error)
            res.status(401)
            throw new Error('Not autorized!!!')
        }
    }

    if (!token) {
        res.status('401')
        throw new error('No token!')
    }

    next()
}

export default authTokenCheck