const express = require("express");
let app = express();

function isOldMiddleware(req, res, next) {
    const age = req.query.age;
    if (age >= 14) {
        next();
    }
    else {
        res.json({
            msg: "sorry you are not of age yet"
        })
    }

}

// app.use(isOldMiddleware)

app.get("/ride1", isOldMiddleware, function (req, res) {

    res.json({
        msg: "you have booked ride 1"
    })
})

app.get("/ride2", isOldMiddleware, function (req, res) {

    res.json({
        msg: "you have booked ride 2"
    })
})

app.listen(3000); 