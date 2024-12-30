import { userService } from "../services/createUserService.js";
import { errorResponse, successResponse } from "../utils/responses.js";

export const createUser = async (req, res) => {
    try{
           console.log(req.body);
           const userDetails = req.body;
           const response = await userService(userDetails);
           return successResponse(res, "User created successfully", response);
    }catch(error){

         errorResponse(error, res);
    }
}

