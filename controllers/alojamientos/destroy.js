import Alojamiento from "../../models/Alojamiento.js";

const destroyA = {
    destroy: async (req, res, next) => {
        try {
            let alojamiento = await Alojamiento.findOneAndDelete(
                { _id: req.params.id }
            );
            if (alojamiento) {
                return res.status(200).json({
                    success: true,
                    message: "Alojamiento eliminado",
                });
            } else {
                return res.status(404).json({
                    success: false,
                    message: "Alojamiento not found",
                });
            }
        } catch (error) {
            next(error);
        }
    },
};

export default destroyA;
