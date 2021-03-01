import { Router } from 'express';

const router = Router();

import * as userCtrl from '../controllers/user.ctr';

router.post('/create/user',userCtrl.createUser);

router.get('/users',userCtrl.getUsers);


export default router;