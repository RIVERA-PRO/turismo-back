import express from "express";
import historias from "../controllers/gastronomia/create.js";
import oneh from '../controllers/gastronomia/get_one.js'
import destroyh from "../controllers/gastronomia/destroy.js";
import updateh from '../controllers/gastronomia/update.js'
import todos from '../controllers/gastronomia/get_public.js'
import exist_publicacion from '../middlewares/publicaciones/exist_pubicacion.js'
import passport from '../middlewares/passport.js'
import destinoSchemas from '../schemas/publicacion.js'
import validator from '../middlewares/validator.js'

let router = express.Router()
const { create } = historias
const { getOne } = oneh
const { destroy } = destroyh
const { update } = updateh
const { read } = todos

router.post('/', passport.authenticate("jwt", { session: false }), validator(destinoSchemas), create)

router.get('/', read)
router.get('/:id', getOne)

router.put('/:id', passport.authenticate('jwt', { session: false }), update)

router.delete('/:id', passport.authenticate('jwt', { session: false }), destroy)

export default router
