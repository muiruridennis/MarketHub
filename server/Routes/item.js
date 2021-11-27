import express from 'express';
import { CreateItem, getItems, getItemsBySearch } from '../controller/items.js'

const router = express.Router();

router.post('/', CreateItem);
router.get('/', getItems);
router.get('/search', getItemsBySearch);


export default router