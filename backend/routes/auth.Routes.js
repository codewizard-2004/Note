import express from 'express';
import {signup} from '../controllers/auth.controller.js'
import { login  ,logout} from '../controllers/auth.controller.js';

const router = express.Router();

router.post("/signup" , signup); // Example response

router.post("/login", login);

router.post("/logout",logout);


export default router