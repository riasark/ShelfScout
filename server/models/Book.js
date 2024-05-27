import mongoose from "mongoose";

const bookSchema = new mongoose.Schema({
    title: String,
    author: String, 
    genre: String, 
    completed: Boolean,
    review: String, 
    rating: Int32Array
});

const Book = mongoose.model('Book', bookSchema);

export default Book;