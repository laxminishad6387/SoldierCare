import express from "express";
import { PORT } from "./config/serverConfig.js";
import connectDB from "./config/dbConfig.js";
import userRouter from "./routes/userRouter.js";
import authRouter from "./routes/authRouter.js";
import { isLoggedIn } from "./validators/authValidator.js";
import cookieParser from "cookie-parser";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.text());
app.use(cookieParser());
app.get('/', (req, res) => {
    res.send("Hello World!");
});

app.use('/User',userRouter);
app.use('/auth', authRouter);
app.get('/login', isLoggedIn, (req, res) => res.send("You are logged in"));
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
    connectDB();
});