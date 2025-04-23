
import express from 'express'
import { createNewProduct, deleteProduct, getAllProducts, getOneProduct, updateProduct } from '../controllers/product.controllers'

const router = express.Router()

router.route('/')
    .post(createNewProduct)
    .get(getAllProducts)

router.route('/:id')
    .delete(deleteProduct)
    .get(getOneProduct)
    .patch(updateProduct)


export default router