import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    username: String,
    password: String,
    books: {
        type: [mongoose.Schema.Types.ObjectId],
        default: []
    },
    fname: String,
    lname: String,
    bio: String
});