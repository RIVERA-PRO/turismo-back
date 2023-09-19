import mongoose from "mongoose";

const commentSchema = new mongoose.Schema({
    publicacion_id: { type: mongoose.Types.ObjectId, ref: 'publicacion' },
    user_id: { type: mongoose.Types.ObjectId, required: true, ref: 'users' },
    text: { type: String, required: true },
    commentable_id: { type: mongoose.Schema.Types.ObjectId, ref: 'comments' }
}, { timestamps: true });


const Comment = mongoose.model('comment', commentSchema);

export default Comment
