import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import OpenAI from "openai/";

dotenv.config();

const app = express();
app.use(express.json());
app.use(cors());

const PORT = 3030;

mongoose.connect(process.env.MONGO_URI)
.then(() => {
    app.listen(PORT, () => console.log(`Server Port: ${PORT}`));
})

