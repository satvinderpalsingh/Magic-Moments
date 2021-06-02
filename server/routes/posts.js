import express from 'express';
const router=express.Router();

import {getPosts} from '../controller/posts.js';//named exports

router.get('/',getPosts);
export default router;