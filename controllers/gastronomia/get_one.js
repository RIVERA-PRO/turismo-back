import Gastronomia from '../../models/Gastronomia.js'; // Cambiar "Publicacion" a "Gastronomia"

const oneGastronomia = {
    getOne: async (req, res, next) => {
        try {
            const gastronomia = await Gastronomia.findOne({ _id: req.params.id }); // Cambiar "Publicacion" a "Gastronomia"

            if (gastronomia) {
                return res.status(200).json({
                    gastronomia: gastronomia, // Cambiar "publicacion" a "gastronomia"
                });
            } else {
                return res.status(404).json({
                    success: false,
                    message: "Gastronomía no existe", // Cambiar "Publicacion no existe" a "Gastronomía no existe"
                });
            }
        } catch (error) {
            next(error);
        }
    },
};

export default oneGastronomia;
