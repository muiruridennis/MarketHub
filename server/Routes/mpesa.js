import express from 'express';

import { lipaNaMpesaOnline, confirmation, validation, lipaNaMpesaOnlineCallback} from '../controller/mpesa.js';
import getOAuthToken from '../middleware/mpesa.js';
const router = express.Router();

router.get('/lipanampesa', getOAuthToken, lipaNaMpesaOnline);
router.post('/confirmation', confirmation);
router.post('/validation',  validation);
router.post('/stkcallback', lipaNaMpesaOnlineCallback)

export default router