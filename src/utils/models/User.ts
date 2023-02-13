import mongoose from "mongoose";

const reqString = {
  type: String,
  required: true
};

const UserSchema = new mongoose.Schema({
  username: reqString,
  password: reqString,
  email: reqString,
  todo: [String],
  pr: {
    squat: { type: Number, required: false },
    bench: { type: Number, required: false },
    deadlift: { type: Number, required: false }
  }
});

export const User = mongoose.models.User || mongoose.model("User", UserSchema);