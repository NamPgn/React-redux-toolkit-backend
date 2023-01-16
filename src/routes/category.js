import express from "express";
import { addCt, getAll, getOne, readProductByCategory, updateCate } from "../controller/category";

const router = express.Router();


router.get('/category/products', readProductByCategory);
router.get('/categorys', getAll);
router.get('/category/:id', getOne);
router.post('/category', addCt);
router.put('/category', updateCate);
// router.delete('/category/:id',)

export default router