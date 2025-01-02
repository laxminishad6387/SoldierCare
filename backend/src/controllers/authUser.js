import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import User from "../schema/userSchema.js";
import { StatusCodes } from "http-status-codes";
import { JWT_EXPIRY, JWT_SECRET } from "../config/serverConfig.js";

export async function login(req, res) {
  console.log("Controller: login called");
  try {
    const loginPayload = req.body;
    const { email, password } = loginPayload;

    // Validate input fields
    if (!email || !password) {
      return res.status(StatusCodes.BAD_REQUEST).json({
        success: false,
        message: "Email and password are required",
      });
    }

    // Find user by email
    const user = await User.findOne({ email });
    console.log("user: ", user);
    if (!user) {
      return res.status(StatusCodes.NOT_FOUND).json({
        success: false,
        message: "User not found",
      });
    }

    // Validate password
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(StatusCodes.UNAUTHORIZED).json({
        success: false,
        message: "Invalid password",
      });
    }

    // Generate JWT token
    const token = jwt.sign({ email: user.email, id: user._id }, JWT_SECRET, {
      expiresIn: JWT_EXPIRY,
    });

    // Set token as HTTP-only cookie
    res.cookie("authToken", token, {
      httpOnly: true,
      secure: true, // ensure cookie is only secure in production
      maxAge: 60 * 60 * 1000 * 24 * 7, // 7 days
    });

    // Return success response
    return res.status(StatusCodes.OK).json({
      success: true,
      message: "Logged in successfully",
      token: token, // Optional: send token in the response body if needed
    });
  } catch (error) {
    console.error("Login error: ", error);
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      success: false,
      error: error.message || "Internal Server Error",
    });
  }
}
