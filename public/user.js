const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    email: { type: String, unique: true, required: true, lowercase: true },
    password: { type: String, required: true },
    resetPasswordToken: String, // hashed token
    resetPasswordExpires: Date, // expiry timestamp
  },
  { timestamps: true }
);

module.exports = mongoose.model("User", userSchema);
