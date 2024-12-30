import User from "../schema/userSchema.js"

export const createUser = async (userDetails) => {
    try{
        const user = await User.create({
            email: userDetails.email,   
            password: userDetails.password,
            role: userDetails.role
        });
        return user;
    }catch(error){
       throw new Error(error);
    }
}

export async function findUser(parameters){
    try {
        const response = await User.findOne({...parameters});
    return response;
    } catch (error) {
        console.log(error); 
        throw {
            reason: 'User could not be found',
            status: StatusCodes.INTERNAL_SERVER_ERROR
        }
    }
}