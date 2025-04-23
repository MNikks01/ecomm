
import express from 'express';
import {
    applyCoupon, createCoupon, createPayment, deleteCoupon,
    getAllCoupons, getOneCoupon, updateCoupon
} from '../controllers/payment.controllers';

const router = express.Router()

router.route('/')
    .post(createPayment)
    .get(getAllCoupons)

router.route('/apply')
    .post(applyCoupon)
    .get(createCoupon)

router.route('/:id')
    .get(getOneCoupon)
    .delete(deleteCoupon)
    .patch(updateCoupon)

export default router