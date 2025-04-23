
import express from 'express'
import { cancelOrder, createNewOrder, getMyOrders, getOneOrder } from '../controllers/order.controllers'

const router = express.Router()

router.route('/:userId/orders')
    .get(getMyOrders)
    .post(createNewOrder)

router.route('/:userId/orders/:orderId')
    .get(getOneOrder)
    .patch(cancelOrder)

export default router