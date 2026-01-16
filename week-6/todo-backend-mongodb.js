const express = require("express");
const { UserModel, TodoModel } = require("./db");
const jwt = require("jsonwebtoken");
const mongoose = require("mongoose");
const JWT_SECRET = "rajan"
const bcrypt = require("bcrypt");
const { auth } = require("./auth");
const { z } = require("zod");
// const mongoose = require("mongoose");
mongoose.connect("mongodb+srv://rajanpantha:$$Rajan$$1@rajan.xogqz8j.mongodb.net/todo-app-database");

const app = express();
app.use(express.json());

app.post("/signup", async function (req, res) {

    const requiredBody = z.object({
        email: z.string().email(),
        password: z.string().min(6).max(100).uppercase().regex(/[0-9]/),
        name: z.string().min(2),
    });
    const parseResult = requiredBody.safeParse(req.body);
    if (!parseResult.success) {
        return res.status(400).json({
            message: "Invalid request body",
            errors: parseResult.error.errors
        });
        return;
    }

    const email = req.body.email;
    const password = req.body.password;
    const name = req.body.name;

    let errorThrown = false;

    try {
        const hashedPassword = await bcrypt.hash(password, 10);
        console.log(hashedPassword);

        await UserModel.create({
            email: email,
            password: hashedPassword,
            name: name
        })
    } catch (e) {
        return res.status(500).json({ message: "Error creating user" });
        errorThrown = true;
    }
    if (!errorThrown) {
        res.status(201).json({ message: "User created successfully" });
    }
});


app.post("/signin", async function (req, res) {
    const email = req.body.email;
    const password = req.body.password;

    // Find user in the database
    const user = await UserModel.findOne({
        email: email,
    });

    const passwordMatch = await bcrypt.compare(password, user.password);

    console.log(user);

    if (user && passwordMatch) {
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
        todos: todos,
    });
});



app.listen(3000);