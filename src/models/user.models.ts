import {Schema, model} from 'mongoose';

const userSchema: Schema = new Schema({
    username: {
      type: String,
      required: true,
      unique: true
    },
    firstName: {
      type: String,
      required: true
    },
    lastName: {
      type: String,
      required: true
    },
    email: {
      type: String,
      unique: true,
      required: false
    },
    aditionalEmail: {
      type: [String],
      default: []
    }
  }, {
    versionKey: false,
    timestamps: { currentTime: () => Math.floor(Date.now() / 1000) }
});

export default model('User',userSchema);