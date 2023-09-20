import Publicacion from "../../models/Publicacion.js";
import User from "../../models/User.js";

const publicaciones = {
    create: async (req, res, next) => {
        try {
            const { cover_photo, mail, photo, name, categoria, description, user_id, title, ubicacion, cover_photo1, cover_photo2, cover_photo3, tipo } = req.body;
            const user = await User.findById(user_id); // encuentra el usuario por su id

            if (!user) {
                return res.status(404).json({
                    success: false,
                    message: "User not found!",
                });
            }

            const publicacion = await Publicacion.create({
                ubicacion,
                tipo,
                title,
                cover_photo,
                cover_photo1,
                cover_photo2,
                cover_photo3,
                description,
                categoria,
                name,
                photo,
                mail,
                user_id: req.user._id // Agregar el user_id aquí
            });

            console.log(req.body)

            return res.status(201).json({
                success: true,
                message: "Publicacion creada",
                publicacion,
            });
        } catch (err) {
            next(err);
        }
    },
};

export default publicaciones;
