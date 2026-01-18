const express = require("express")
const jwt = require("jsonwebtoken")
const mongoose = require("mongoose")
const {userRouter} = require("./routes/user")
const {courseRouter} = require("./routes/course")
const {adminRouter} = require("./routes/admin")

const app = express();

app.use("/user", userRouter)
app.use("/course", courseRouter)
app.use("/admin", adminRouter)

async function main(){
    await mongoose.connect("mongodb+srv://rajanpantha:$$Rajan$$1@rajan.xogqz8j.mongodb.net/coursera-app");
    app.listen(3000)
    console.log("Listening to port 3000")
}
main();

