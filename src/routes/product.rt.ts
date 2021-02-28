import { Router } from 'express';

const router = Router();

import * as productCtrl from '../controllers/product.ctr';

router.post('/create/product',productCtrl.createProduct);

router.get('/products',productCtrl.getProducts);


export default router;