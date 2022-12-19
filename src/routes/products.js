import express from 'express';
import { getAllProducts, getOne } from '../controller/products'

const router = express.Router();

router.get('/products', getAllProducts);
router.get('/product/:id', getOne);

export default router;