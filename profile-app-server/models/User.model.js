const mongoose = require ("mongoose")
const { Schema, model } = mongoose

// TODO: Please make sure you edit the User model to whatever makes sense in this case
const userSchema = new Schema(
  {
    username: {
      type: String,
      required: [true, 'Email is required.'],
      unique: true,
      lowercase: true,
      trim: true
    },
    password: {
      type: String,
      required: [true, 'Password is required.']
    },
    campus:{
      type: String,
      enum:["Madrid", "Barcelona", "Miami", "Paris", "Berlin", "Amsterdam", "México", "Sao Paulo", "Lisbon", "Remote"]
    },
    course: {
      type: String,
      enum: ["Web Dev", "UX/UI", "Data Analytics","Cyber Security"],
    },
    image: String
  },
  {   
    timestamps: true
  }
);

module.exports = model("User", userSchema);