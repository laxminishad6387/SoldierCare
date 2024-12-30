import { loginUser } from "../services/authUserService.js";
import { StatusCodes } from "http-status-codes";
import { errorResponse, successResponse } from "../utils/responses.js";


export async function login(req, res) {
  console.log("Controller: login called");
  try {
    const loginPayload = req.body;

    const response = await loginUser(loginPayload);

    console.log("Inside the login validation")
     
    // console.log("Response: " + response);

    res.cookie("authToken", response, {
      httpOnly: true,
      secure: true,
      maxAge: 60 * 60 * 1000 * 24 * 7, // 7 days
    });

    successResponse(res, "logged in successfully", {});
  } catch (error) {

    errorResponse( "Internal Server Error", res);
  }
}
