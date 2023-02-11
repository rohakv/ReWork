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
  }
})

module.exports = mongoose.models.UserSchema || mongoose.model("User", UserSchema); 