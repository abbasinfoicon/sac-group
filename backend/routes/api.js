import express from 'express';
import postController from "../app/controllers/postController.js";
import sliderController from '../app/controllers/sliderController.js';

const router = express.Router();

// POST-ROUTER
router.get('/posts', postController.getAll);
router.get('/posts/:id', postController.sglPost);
router.post('/post', postController.crtPost);
router.put('/posts/:id', postController.udPost);
router.delete('/posts/:id', postController.dtPost);

// SLIDER-ROUTER
router.get('/sliders', sliderController.getAll);
router.get('/sliders/:id', sliderController.sglPost);
router.post('/slider', sliderController.crtPost);
router.put('/sliders/:id', sliderController.udPost);
router.delete('/sliders/:id', sliderController.dtPost);

export default router;