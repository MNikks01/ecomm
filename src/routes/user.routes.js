
import express from 'express'
import { createUser, deleteUser, getAllUser, getUser, loginUser, logoutUser } from '../controllers/user.controllers'

const router = express.Router()

router.route('/')
    .post(createUser)
    .get(getAllUser)

router.route('/login')
    .post(loginUser)

router.route('/logout')
    .post(logoutUser)

router.route('/:id')
    .delete(deleteUser)
    .get(getUser)

export default router