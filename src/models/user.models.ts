import {Schema, model} from 'mongoose';

const roles = {
  values: ['ADMIN','USER'],
  message: '{VALUE} rol no valido'
}

const userSchema: Schema = new Schema({
    username: {
      type: String,
      required: [true,'El nombre de usuario es requerido.'],
      unique: true
    },
    password:{
      type: String,
      required: true
    },
    firstName: {
      type: String,
      required: [true,'El nombre es obligatorio']
    },
    lastName: {
      type: String,
      required: false,
    },
    email: {
      type: String,
      unique: true,
      required: [true,'El email es obligatorio'],
    },
    aditionalEmail: {
      type: [String],
      default: []
    },
    role:{
      type: String,
      default:'USER',
      enum: roles,
    },
    isActive:{
      type: Boolean,
      default: true,
    }
  }, {
    versionKey: false,
    timestamps: true,
});

export default model('User',userSchema);