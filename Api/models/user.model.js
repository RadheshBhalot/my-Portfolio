import mongoose from 'mongoose';
// import uniqueValidator from 'mongoose-unique-validator';

const UserSchema = mongoose.Schema({
  _id: Number,
  name: {
    type: String,
    required: [true,"Name is required"],
    lowercase: true,
    trim: true,
  },
  email: {
    type: String,
    required: [true,"Email is required"],
    lowercase: true,
    trim: true
  },
  message:{
    type:String,
    required:[true,"Message is required"],
    trim :true,
  },
  role: String,
  status: Number,
  info: String
});

// Apply the uniqueValidator plugin to UserSchema.
// UserSchema.plugin(uniqueValidator);

// compile schema to model
const UserSchemaModel = mongoose.model('user_collection',UserSchema);

export default UserSchemaModel