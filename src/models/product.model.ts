import {Schema, model} from 'mongoose';

const productSchema = new Schema({
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
    price: {
        type: Number,
        required:true,
    }
}, {
    versionKey: false,
    timestamps: true,
});


export default model('product',productSchema);