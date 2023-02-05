import asyncHandler from 'express-async-handler'
import User from "../models/userSchema.js";
import generateToken from '../utils/generateToken.js';

const getUserAuth = asyncHandler(async(req, res) => {

    const {email, password} = req.body;

    const user = await User.findOne({email})

    if (user && (await user.matchPassword(password))) {
        res.json({
            _id: user._id,
            name: user.name,
            email: user.email,
            isAdmin: user.isAdmin,
            token: generateToken(user._id)
        })
    } else {
        res.status(401)
        throw new Error('Password or email invalid!!!')
    }

    res.send({
        email: email,
        password: password
    })
});

const getTokenAuth = asyncHandler(async(req, res) => {

    console.log('HERE!!!');

    res.send({
        email: 'here',
    })
});

export {
    getUserAuth,
    getTokenAuth
}