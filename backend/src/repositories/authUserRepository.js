import User from "../schema/userSchema.js"
import bcrypt from "bcrypt";

 export const authUserRepository = async (userDetails) => {
    try{
        const user = await User.findOne({
            email: userDetails.email,   
        });

        const isMatch = await bcrypt.compare(userDetails.password, user.password);
        if(!isMatch){
            throw new Error("Invalid credentials");
        }
        return user;
    }catch(error){
       throw new Error(error);
    }
}

