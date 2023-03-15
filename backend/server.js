import express from "express";
import path from "path";
import { fileURLToPath } from "url";
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
import dotenv from "dotenv";
import connectDB from "./config/dbConnect.js"
import cookieParser from "cookie-parser";
import cors from 'cors'
import { errorHandler, notFound } from "./middlewares/errorMiddleware.js";


import authRouter from "./routes/authRoute.js";
import contactRouter from "./routes/contactsRoute.js";

dotenv.config({ path: path.resolve(__dirname, "./.env") });

connectDB()
const app = express()

app.use(express.json()); 
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }))

const corsOptions = {
  credentials: true,
  origin: '*',
};

app.use(cors(corsOptions));

 
app.use('/api/auth', authRouter);    
app.use("/api/contact", contactRouter);    

app.use(notFound)
app.use(errorHandler) 

const PORT = process.env.PORT;

const server = app.listen(PORT,() => {
    console.log(`server started on port ${PORT}`);
})