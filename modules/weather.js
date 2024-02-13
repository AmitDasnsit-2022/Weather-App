import mongoose, { mongo } from "mongoose";

const weatherSchema = new mongoose.Schema({
    city: {
        type: String,
        required: true,
        default: null,
    },
    temprature: {
        type: Number,
        required: true,
        default: 0,
    },
    description: {
        type: String,
        required: true,
        default: null,
    }
},
    { timestamps: true }
);

export default mongoose.model('weathers',weatherSchema);