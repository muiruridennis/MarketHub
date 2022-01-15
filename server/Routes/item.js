import express from 'express';
import { CreateItem, getItems, getItemsBySearch, getItem  } from '../controller/items.js';
import auth from '../middleware/auth.js';

const router = express.Router();

//Take away: move specific routes to the top of dynamic routes (routes with params) both at the app level and in your route files.
router.post('/',auth, CreateItem);
router.get('/', getItems);
router.get('/search', getItemsBySearch);

router.get('/:id', getItem);



export default router