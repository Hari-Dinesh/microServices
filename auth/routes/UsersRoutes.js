import express from 'express';
import { AdminController } from '../controllers/usersController.js';

const router = express.Router();
router.post('/admincreate', AdminController.adminCreate);
router.post('/adminlogin', AdminController.adminLogin);
router.post('/validateAdmin',AdminController.validateAdmin)
export default router;
