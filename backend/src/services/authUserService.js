import { findUser } from "../repositories/userRepository.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { StatusCodes } from "http-status-codes";
import { JWT_EXPIRY, JWT_SECRET } from "../config/serverConfig.js";
export async function loginUser(authDetails){
    console.log(authDetails);
    console.log("Inside loginUser");
   const email = authDetails.email;
   const plainPassword = authDetails.password;

   const user = await findUser({ email });

   console.log("user: " , user);

   if(!user){
       throw {
           reason: 'User with the given email does not exist',
           status: StatusCodes.NOT_FOUND
       }
   }


   const isPasswordValidated = await bcrypt.compare(plainPassword, user.password);
    console.log("isPasswordValidated: ", isPasswordValidated);

   if(!isPasswordValidated){
       throw {  message: 'Invalid password, please try again', status: StatusCodes.UNAUTHORIZED };
       }

       
    const  token = jwt.sign({ email: user.email, id: user._id }, JWT_SECRET, { expiresIn: JWT_EXPIRY });
 
    console.log("token: ", token);
    return token;

} 

    