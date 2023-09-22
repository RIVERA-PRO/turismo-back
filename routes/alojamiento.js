import express from "express";
import alojamientos from "../controllers/alojamientos/create.js";
import oneP from '../controllers/alojamientos/get_one.js'
import destroyP from "../controllers/alojamientos/destroy.js";
import updateP from '../controllers/alojamientos/update.js'
import todos from '../controllers/alojamientos/get_public.js'
import passport from '../middlewares/passport.js'
import destinoSchemas from '../schemas/publicacion.js'
import validator from '../middlewares/validator.js'

let router = express.Router()
const { create } = alojamientos
const { getOne } = oneP
const { destroy } = destroyP
const { update } = updateP
const { read } = todos

router.post('/', passport.authenticate("jwt", { session: false }), validator(destinoSchemas), create)

router.get('/', read)
router.get('/:id', getOne)

router.put('/:id', passport.authenticate('jwt', { session: false }), update)

router.delete('/:id', passport.authenticate('jwt', { session: false }), destroy)

export default router
