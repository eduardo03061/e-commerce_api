import {Schema, model} from 'mongoose';

const productSchema: Schema = new Schema({
    title:{
        type: String,
        required:true,
        trim: true
    },
    description:{
        type: String,
        required:true,
        trim: true
    },
    category:{
        type: String,
        required:false,
        trim: true
    },
    price: {
        type: Number,
        required:true,
    }
}, {
    versionKey: false,
    timestamps: { currentTime: () => Math.floor(Date.now() / 1000) }
});

export default model('Product',productSchema);