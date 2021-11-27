import express from 'express';

import {signIn, signUp} from "../controller/user.js"
const router = express.Router();// creates instance of router

router.post('/signin', signIn);
router.post('/signup', signUp);


export default router 