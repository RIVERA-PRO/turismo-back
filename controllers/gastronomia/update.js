import Gastronomia from "../../models/Gastronomia.js"; // Cambiar "Publicacion" a "Gastronomia"

const updateG = {
    update: async (req, res, next) => {
        try {
            const { id } = req.params;

            // Verificar si la gastronomía existe
            let gastronomia = await Gastronomia.findById(id); // Cambiar "Publicacion" a "Gastronomia"
            if (!gastronomia) {
                return res.status(404).json({
                    success: false,
                    message: "Gastronomía no encontrada", // Cambiar "Publicacion no encontrada" a "Gastronomía no encontrada"
                });
            }

            // Actualizar los datos de la gastronomía si se proporcionan
            const { title, description, categoria, cover_photo } = req.body;

            const updatedFields = {};

            if (title) {
                updatedFields.title = title;
            }
            if (description) {
                updatedFields.description = description;
            }
            if (categoria) {
                updatedFields.categoria = categoria;
            }
            if (cover_photo) {
                updatedFields.cover_photo = cover_photo;
            }

            // Actualizar la gastronomía
            gastronomia = await Gastronomia.findByIdAndUpdate(
                id,
                { $set: updatedFields },
                { new: true }
            ); // Cambiar "Publicacion" a "Gastronomia"

            return res.status(200).json({
                success: true,
                message: "Gastronomía actualizada exitosamente", // Cambiar "Publicacion actualizada exitosamente" a "Gastronomía actualizada exitosamente"
                gastronomia: gastronomia, // Cambiar "publicacion" a "gastronomia"
            });
        } catch (error) {
            next(error);
        }
    },
};

export default updateG;
