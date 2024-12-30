import { createUser } from "../repositories/userRepository.js";

export const userService = async (userDetails) => {
    const user = await createUser(userDetails);
    return user;
}