
import express from 'express';
import {ProductController} from '../controllers/ProductController.js';
const router = express.Router();

router.post('/admin/addNewProduct/:adminid',  ProductController.AddProduct);
router.get('/getProduct', ProductController.getProduct);
router.post('/admin/updateProduct/:adminid/:id',  ProductController.updateProduct);
router.delete('/admin/deleteProduct/:adminid/:id',  ProductController.deleteProduct);

export default router;
