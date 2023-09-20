import Gastronomia from "../../models/Gastronomia.js";
import User from "../../models/User.js";

const gastronomias = {
    create: async (req, res, next) => {
        try {
            const { cover_photo, mail, photo, name, categoria, description, ubicacion, title, tipo, user_id } = req.body;
            const user = await User.findById(user_id);

            if (!user) {
                return res.status(404).json({
                    success: false,
                    message: "User not found!",
                });
            }

            const gastronomia = await Gastronomia.create({
                cover_photo,
                tipo,
                title,
                ubicacion,
                description,
                categoria,
                name,
                photo,
                mail,
                user_id: req.user._id // Agregar el user_id aquí
            });

            console.log(req.body);

            return res.status(201).json({
                success: true,
                message: "Gastronomía creada", // Cambiar "Historia creada" a "Gastronomía creada"
                gastronomia, // Cambiar "historia" a "gastronomia"
            });
        } catch (err) {
            next(err);
        }
    },
};

export default gastronomias;
