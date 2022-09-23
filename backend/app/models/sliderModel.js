import mongoose from "mongoose";

const sliderSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    subtitle: {
        type: String,
    },
    desc:{
        type: String,
        required: true,
    },
    img: {
        type: String,
        trim: true
    },
    video: {
        type: String,
        trim: true
    }
});

const sliderModel = mongoose.model('slider', sliderSchema);

export default sliderModel;