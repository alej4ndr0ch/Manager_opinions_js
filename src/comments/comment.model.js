import { Schema, model } from "mongoose";

const CommentSchema = Schema({
    text: {
        type: String,
        required: true
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    publication: {
        type: Schema.Types.ObjectId,
        ref: "Publication",
        required: true
    },
    estado: {
        type: Boolean,
        default: true
    }
}, {
    timestamps: true,
    versionKey: false
})

export default model("Comment", CommentSchema);