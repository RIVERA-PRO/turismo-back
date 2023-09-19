import Gastronomia from "../../models/Gastronomia.js"; // Cambiar "Publicacion" a "Gastronomia"

const destroyG = {
    destroy: async (req, res, next) => {
        try {
            let gastronomia = await Gastronomia.findOneAndDelete( // Cambiar "Publicacion" a "Gastronomia"
                { _id: req.params.id }
            );
            if (gastronomia) {
                return res.status(200).json({
                    success: true,
                    message: "Gastronomía eliminada", // Cambiar "Publicacion eliminada" a "Gastronomía eliminada"
                });
            } else {
                return res.status(404).json({
                    success: false,
                    message: "Gastronomía not found", // Cambiar "Publicacion not found" a "Gastronomía not found"
                });
            }
        } catch (error) {
            next(error);
        }
    },
};

export default destroyG;
