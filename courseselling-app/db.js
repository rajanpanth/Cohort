require('dotenv').config()
const mongoose = require("mongoose")
const { Schema } = require("mongoose")
const ObjectId = mongoose.ObjectId;
console.log("MONGO_URL:", process.env.MONGO_URL);
mongoose.connect(process.env.MONGO_URL);


const User = new Schema({
    userId: ObjectId,
    email: { type: String, unique: true },
    password: String, 
    firstName: String,
    lastName: String
})

const Admin = new Schema({
    email: { type: String, unique: true },
    password: String,
    firstName: String,
    lastName: String
})

const Course = new Schema({
    title: String,
    description: String,
    price: Number,
    imageUrl: String,
    creatorId: ObjectId,

})

const Purchase = new Schema({
    userId: ObjectId,
    courseId: ObjectId,
})

const UserModel = mongoose.model('user', User);
const AdminModel = mongoose.model('admin', Admin);
const CourseModel = mongoose.model('course', Course);
const PurchaseModel = mongoose.model('purchase', Purchase);


module.exports = {
    UserModel: UserModel,
    AdminModel: AdminModel,
    CourseModel: CourseModel,
    PurchaseModel: PurchaseModel,
}