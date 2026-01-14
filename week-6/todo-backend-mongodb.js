const express = require("express");
const { UserModel, TodoModel } = require("./db");
const jwt = require("jsonwebtoken");
const { default: mongoose } = require("mongoose");
const JWT_SECRET = "rajan"
// const mongoose = require("mongoose");
mongoose.connect("mongodb+srv://rajanpantha:$$Rajan$$1@rajan.xogqz8j.mongodb.net/");

const app = express();
app.use(express.json());

app.post("/signup", async function (req, res) {
    const email = req.body.email;
    const password = req.body.password;
    const name = req.body.name;

    await UserModel.create({
        email: email,
        password: password,
        name: name
    })

    res.json({ message: "User created successfully" });
});


app.post("/signin", async function (req, res) {
    const email = req.body.email;
    const password = req.body.password;

    // Find user in the database
    const user = await UserModel.findOne({ email: email, password: password });

    console.log(user);

    if (user) {
        const token = jwt.sign({
            id: user._id.toString()
        }, JWT_SECRET);
        res.json({
            token: token
        });
    } else {
        res.status(401).json({ message: "Invalid credentials" });
    }
});


app.post("/todo", auth, async function (req, res) {
    const userId = req.userId;
    const title = req.body.title;
    const done = req.body.done;
   await TodoModel.create({
        title: title,
        done: done,
        userId
    });

    res.json({
        userId: userId
    });

});


app.get("/todos", auth, function (req, res) {
    const userId = req.userId;
    const todos = TodoModel.find({ userId: userId });

    res.json({
        todos: todos
    });

});

function auth(req, res, next) {
    const token = req.headers.token;
    const decodedData = jwt.verify(token, JWT_SECRET);
    if (decodedData) {
        req.userId = decodedData.id;
        next();
    } else {
        res.status(401).json({ message: "Unauthorized" });
    }
}

app.listen(3000);