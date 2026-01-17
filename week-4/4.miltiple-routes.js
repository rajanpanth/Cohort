const express = require("express")

let app = express();

// app.get("/sum", function (req, res) {
//     let a = parseInt(req.query.a);
//     let b = parseInt(req.query.b);
//     res.json({
//         answer: a + b
//     })
// })
app.get("/sum/:a/:b", function (req, res) {
    let a = parseInt(req.params.a);
    let b = parseInt(req.params.b);
    res.json({
        answer: a + b
    })
})

app.get("/multiply", function (req, res) {
    let a = req.query.a;
    let b = req.query.b;
    res.json({
        answer: a * b
    })
})

app.get("/sub", function (req, res) {
    let a = req.query.a;
    let b = req.query.b;
    res.json({
        answer: a - b
    })
})

app.get("/divide", function (req, res) {
    let a = req.query.a;
    let b = req.query.b;
    res.json({
        answer: a / b
    })
})
app.listen(3000)