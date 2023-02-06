import express from "express";
import { getUserAuth } from '../controllers/userController.js'
import authTokenCheck from '../middleware/authMiddleware.js'
import {getTokenAuth, registerUser} from '../controllers/userController.js'

const router = express.Router();

router.post('/', registerUser)
router.post('/login', getUserAuth)
router.route('/profile').get(authTokenCheck, getTokenAuth)

export default router