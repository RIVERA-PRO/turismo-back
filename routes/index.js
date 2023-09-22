import userRouter from './users.js'
import publicacion from './publicacion.js'
import commentsRouter from './comments.js';
import likes from './likes.js'
import gastronomia from './gastronomia.js'
import express from 'express'
let router = express.Router();
import alojamiento from './alojamiento.js'

router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' });
});

router.use('/users', userRouter)
router.use('/publicacion', publicacion)
router.use("/comments", commentsRouter);
router.use("/likes", likes);
router.use("/gastronomia", gastronomia);
router.use("/alojamiento", alojamiento);
export default router