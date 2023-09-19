import mongoose from 'mongoose'

let schema = new mongoose.Schema(
    {
        user_id: { type: mongoose.Types.ObjectId, ref: "user", required: true },
        name: { type: String, required: false, ref: "user" },
        mail: { type: String, required: false, ref: "user" },
        photo: { type: String, required: false, ref: "user" },
        cover_photo: { type: String, required: true },
        description: { type: String, required: true },
        categoria: { type: String, required: true },
        ubicacion: { type: String, required: true },
        title: { type: String, required: true },

    }, {
    timestamps: true
}
);

let Gastronomia = mongoose.model("Gastronomia", schema); // Cambiar "publicacion" a "historia"
export default Gastronomia;
