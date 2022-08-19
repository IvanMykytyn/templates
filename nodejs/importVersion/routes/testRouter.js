import express from 'express'
const router = express.Router()

import { testController } from '../controllers'
router.route('/').get(testController)

export default router
