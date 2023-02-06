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
    const user = await User.findOne({_id: req.user._id})

    res.json({
        _id: user._id,
        name: user.name,
        email: user.email,
        isAdmin: user.isAdmin
    })
});

const registerUser = asyncHandler(async(req, res) => {
    const {email, password, name} = req.body;

    const isUserExist = await User.findOne({email})
    console.log('isUserExist', isUserExist);
    if (isUserExist) {
        res.status(400)
        throw new Error('User already exist!')
    } 


    const user = await User.create({
        name,
        email,
        password
    })

    if (user) {
        res.status(201).json({
            _id: user._id,
            name: user.name,
            email: user.email
        })
    } else {
        res.status(404)
        throw new Error('User not created')
    }
});

export {
    getUserAuth,
    getTokenAuth,
    registerUser
}