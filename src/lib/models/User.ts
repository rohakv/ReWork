import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    maxLength: [15, "Username can't be more than 15 characters"]
  },
  password: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  todo: {
    type: Array,
  },
  pr: {
    type: Array
  }
})

export const User = mongoose.models.Customer || mongoose.model("User", UserSchema);