const express = require("express")
const Router = express.Router();

const courseRouter = Router;

courseRouter.post("/purchases", function (req, res) {
    res.json({
        message: "signup successful!!!!",
    })
})

courseRouter.get("/preview", function (req, res) {
    res.json({
        message: "signup successful!!!!",
    })
})


module.exports = {
    courseRouter: courseRouter
}