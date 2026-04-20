import { Router } from "express";
import * as userCtrl from '../controller/user.controller';
import { authenticate } from '../middlewares/auth.middleware';
import { hasReaderRole } from '../middlewares/user.middleware';

const router  = Router();

router.get('/email/:email', userCtrl.getOneByEmail);
router.post('/', authenticate, hasReaderRole, userCtrl.create);
router.put('/:username', userCtrl.update);
router.get('/', userCtrl.getAll);



export default router;