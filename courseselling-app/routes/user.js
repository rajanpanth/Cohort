const express = require("express")
const bcrypt = require("bcrypt");
const { z } = require("zod");
const { UserModel, PurchaseModel } = require("../db");
const jwt = require("jsonwebtoken");
const { JWT_USER_PASSWORD } = require("../config")
const userRouter = express.Router();

userRouter.post("/signup", async function (req, res) {

    const requireBody = z.object({
        email: z.string().min(3).max(100).email(),
        password: z.string().min(3).max(100),
        firstName: z.string().min(3).max(100),
        lastName: z.string().min(3).max(100)
    });

    const parseDataWithSuccess = requireBody.safeParse(req.body);

    if (!parseDataWithSuccess.success) {
        return res.json({
            message: "Incorrect data format",
            error: parseDataWithSuccess.error,
        });
    }
    const email = req.body.email;
    const password = req.body.password;
    const firstName = req.body.firstName;
    const lastName = req.body.lastName;
    const hashedPassword = await bcrypt.hash(password, 5);

    try {
        await UserModel.create({
            email: email,
            password: hashedPassword,
            firstName: firstName,
            lastName: lastName
        });
    } catch (error) {
        return res.json({
            message: "User already exists!",
        });
    }

    res.json({
        message: "You are signed up!",
    });
});

userRouter.post("/signin", async function (req, res) {
    const email = req.body.email;
    const password = req.body.password;

    const user = await UserModel.findOne({
        email: email,
    });

    if (!user) {
        return res.status(403).json({
            message: "Invalid Credentials!",
        });
    }

    const passwordMatch = await bcrypt.compare(password, user.password);
    if (passwordMatch) {
        const token = jwt.sign(
            {
                id: user._id.toString(),
            },
            JWT_USER_PASSWORD
        );

        res.json({
            token: token,
            message: "You are signed in!",
        });
    } else {
        res.status(403).json({
            message: "Invalid Credentials!",
        });
    }
})

userRouter.get("/purchases", userMiddleware, async function(req, res) {
    const userId = req.userId;

    const purchases = await purchaseModel.find({
        userId,
    });

    let purchasedCourseIds = [];

    for (let i = 0; i<purchases.length;i++){ 
        purchasedCourseIds.push(purchases[i].courseId)
    }

    const coursesData = await courseModel.find({
        _id: { $in: purchasedCourseIds }
    })

    res.json({
        purchases,
        coursesData
    })
})

module.exports = {
    userRouter: userRouter
}