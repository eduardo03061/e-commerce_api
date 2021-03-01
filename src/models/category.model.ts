import {Schema, model} from 'mongoose';

const categorySchema: Schema = new Schema({
    name:{
        type: String,
        required: true
    }
}, 
{_id: false});


 

export default categorySchema;
 