const asyncHandler = require("express-async-handler");
const bcrypt = require("bcrypt");
const User = require("../models/userModel");
require("dotenv").config();

const registerUser = asyncHandler(async (req, res) => {
  const {
    firstName,
    lastName,
    email,
    password,
    phoneNumber,
    username,
    role,
  } = req.body;

  console.log("Request Body:", req.body);

  // Check if all fields are provided
  if (
    !firstName ||
    !lastName ||
    !email ||
    !password ||
    !phoneNumber ||
    !username ||
    !role
  ) {
    res.status(400);
    throw new Error("Please provide all required fields");
  }

  // Check if user already exists
  const userExist = await User.findOne({ email });
  if (userExist) {
    return res.status(400).json({ message: "User already exists" });
  }

  // Hash password
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);

  // Create the user
  const newUser = await User.create({
    firstName,
    lastName,
    email,
    phoneNumber,
    password: hashedPassword,
    username,
    role
  });
  console.log("New User:", newUser);
  // Send success response
  res.status(201).json({ message: "User registered successfully", user: newUser});
});


module.exports = {registerUser}