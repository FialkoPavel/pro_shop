import mongoose from 'mongoose';
const { Schema } = mongoose;
import bcrypt from 'bcryptjs'

const userSchema = new Schema({
  name:  { type: String, required: true },
  email:  { type: String, required: true, unique: true },
  password:  { type: String, required: true },
  isAdmin:  { type: Boolean, required: true, default: false },
},{
    timestamps: true
});

userSchema.methods.matchPassword = async function(password) {
  return await bcrypt.compare(password, this.password)
}



const User = mongoose.model('User', userSchema)

export default User