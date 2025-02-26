import { Schema, model } from "mongoose";

const UserSchema = Schema({
    name: {
        type: String,
        required: true,
        maxlength: 25
    },
    surname: {
        type: String,
        required: true,
        maxlength: 25
    },
    username: {
        type: String,
        unique: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
        minLength: 8
    },
    phone: {
        type: String,
        maxlength: 8,
        minlength: 8,
        required: true
    },
    role: {
        type: String,
        enum: ["ADMIN", "USER"],
        default: "USER"
    },
    estado: {
        type: Boolean,
        default: true
    }
}, {
    timestamps: true,
    versionKey: false
})

UserSchema.methods.toJSON = function () {
    const { __v, password, _id, ...user } = this.toObject();
    user.uid = _id;
    return user;
}

export default model('User', UserSchema);