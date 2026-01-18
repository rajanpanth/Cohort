const express = require("express")
const Router = express.Router();

const userRouter = Router;

userRouter.post("/signup", function (req, res) {

    res.json({
        message: "signup successful!!!!",
    })
})

userRouter.post("/signin", function (req, res) {

    res.json({
        message: "signup successful!!!!",
    })
})

userRouter.get("/purchases", function (req, res) {
    res.json({
        message: "signup successful!!!!",
    })
})

module.exports = {
    userRouter: userRouter
}