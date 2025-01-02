import express from "express";
import { createUser } from "../controllers/createUser.js";

const userRouter = express.Router();

userRouter.post('/createUser', createUser);

export default userRouter;