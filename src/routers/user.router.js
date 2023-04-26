import { Router } from 'express';
import UsersController from '../controllers/user.controller.js';


const router = Router();

router.get('/usuario', UsersController.getUser);
router.get('/usuario/:usuario_id', UsersController.getUserParams);
router.post('/usuario', UsersController.postUser);
router.put('/usuario', UsersController.putUser);
router.delete('/usuario', UsersController.deleteUser);

export default router;