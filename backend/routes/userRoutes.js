import express from "express";
import { getUserAuth } from '../controllers/userController.js'
import authTokenCheck from '../middleware/authMiddleware.js'
import {getTokenAuth} from '../controllers/userController.js'

const router = express.Router();

router.post('/login', getUserAuth)
router.route('/profile').get(authTokenCheck, getTokenAuth)

export default router