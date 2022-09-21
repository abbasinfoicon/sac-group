import express from 'express';
import postController from "../app/controllers/postController.js";

const router = express.Router();

router.get('/posts', postController.getAll);
router.get('/posts/:id', postController.sglPost);
router.post('/post', postController.crtPost);
router.put('/posts/:id', postController.udPost);
router.delete('/posts/:id', postController.dtPost);

export default router;