import { Schema, model } from "mongoose";

const PublicationSchema = Schema({
    title: {
        type: String,
        required: [true, "Post title is required"]
    },
    content: {
        type: String,
        required: [true, "Post content is required"]
    },
    DateAndTime: {
        type: String,
        default: () => {
            const current = new Date();
            return current.toISOString().slice(0, 16).replace("T", " ");
        }
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: "User",
        required: [true, "The user of the publication is required"]
    },
    categorie: {
        type: Schema.Types.ObjectId,
        ref: "Categorie",
        required: [true, "The category of the publication is required"]
    },
    estado: {
        type: Boolean,
        default: true
    }
}, {
    timestamps: true,
    versionKey: false
});

export default model("Publication", PublicationSchema);