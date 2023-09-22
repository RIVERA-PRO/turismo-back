import Alojamiento from "../../models/Alojamiento.js";

const updateA = {
    update: async (req, res, next) => {
        try {
            const { id } = req.params;

            // Verificar si el alojamiento existe
            let alojamiento = await Alojamiento.findById(id);
            if (!alojamiento) {
                return res.status(404).json({
                    success: false,
                    message: "Alojamiento no encontrado",
                });
            }

            // Actualizar los datos del alojamiento si se proporcionan
            const { title, description, categoria, cover_photo, cover_photo1, cover_photo2, cover_photo3, ubicacion } = req.body;

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
            if (ubicacion) {
                updatedFields.ubicacion = ubicacion;
            }
            if (cover_photo) {
                updatedFields.cover_photo = cover_photo;
            }
            if (cover_photo1) {
                updatedFields.cover_photo1 = cover_photo1;
            }
            if (cover_photo2) {
                updatedFields.cover_photo2 = cover_photo2;
            }
            if (cover_photo3) {
                updatedFields.cover_photo3 = cover_photo3;
            }

            // Actualizar el alojamiento
            alojamiento = await Alojamiento.findByIdAndUpdate(
                id,
                { $set: updatedFields },
                { new: true }
            );

            return res.status(200).json({
                success: true,
                message: "Alojamiento actualizado exitosamente",
                alojamiento: alojamiento,
            });
        } catch (error) {
            next(error);
        }
    },
};

export default updateA;
