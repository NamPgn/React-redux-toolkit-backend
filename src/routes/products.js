import express from 'express';
import { addProduct, delete_, editProduct, getAllProducts, getOne } from '../controller/products'
import { uploadProduct, uploadStorageProduct, uploadXlxsProducts } from '../services/upload';

const router = express.Router();

router.get('/products', getAllProducts);
router.get('/product/:id', getOne);
router.delete('/product/:id', delete_);
router.post('/product', uploadProduct, addProduct);
router.put('/product/:id', uploadProduct, editProduct);
router.post('/product/creating', uploadStorageProduct.single('xlsxProduct'), uploadXlxsProducts);
export default router;