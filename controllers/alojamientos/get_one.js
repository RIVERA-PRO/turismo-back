import Alojamiento from '../../models/Alojamiento.js';

const oneAlojamiento = {
    getOne: async (req, res, next) => {
        try {
            const alojamiento = await Alojamiento.findOne({ _id: req.params.id });

            if (alojamiento) {
                return res.status(200).json({
                    alojamiento: alojamiento
                });
            } else {
                return res.status(404).json({
                    success: false,
                    message: "Alojamiento no existe",
                });
            }
        } catch (error) {
            next(error);
        }
    },
};

export default oneAlojamiento;
