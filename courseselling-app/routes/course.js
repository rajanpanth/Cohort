const express = require("express");
const {userMiddleware} = require("../middleware/user-middleware");
const {PurchaseModel, CourseModel} = require("../db")
const courseRouter = express.Router();

courseRouter.post("/purchases", userMiddleware, async function (req, res) {
   const userId = req.userId;
   const courseId = req.body.courseId;

   await PurchaseModel.create({
    userId,
    courseId

   })

    res.json({
        message: "you have successfully brought the course!!!!",
    })
})

courseRouter.get("/preview", async function (req, res) {
    const courses = await CourseModel.find({});
    res.json({
      courses
    })
})


module.exports = {
    courseRouter: courseRouter
}