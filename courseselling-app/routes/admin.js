const {Router} = require("express")
const adminRouter = Router();
const {adminModel} = require("../db")

adminRouter.post("/signup", function (req, res) {

    res.json({
        message: "signup successful!!!!",
    })
})
adminRouter.post("/signin", function (req, res) {

    res.json({
        message: "signup successful!!!!",
    })
})

adminRouter.post("/course", function (req, res) {
    res.json({
        message: "signup successful!!!!",
    })
})

adminRouter.put("/course", function (req, res) {
    res.json({
        message: "signup successful!!!!",
    })
})

adminRouter.get("/course", function (req, res) {
    res.json({
        message: "signup successful!!!!",
    })
})

module.exports = {
    adminRouter: adminRouter
}