const mongoose = require("mongoose")
const { Schema } = require("mongoose")
const ObjectId = mongoose.ObjectId; 

const User = new Schema({
    email: String,
    password: String,
    name: String
})

const Todo = new Schema({
    title: String, 
    done: Boolean,
    userId: ObjectId
})

const UserModel = mongoose.model('users', User);
const TodoModel = mongoose.model('todos', Todo);

module.exports = {
    UserModel: UserModel,
    TodoModel: TodoModel
}