const express = require("express");
const cors = require("cors")

const app = express();
app.use(express.json())

app.get("/", function(req, res){
    res.sendFile(__dirname + "/public/fresh-sum.html")
})

app.post("/sum", function (req, res) {
    let a = parseInt(req.body.a);
    let b = parseInt(req.body.b);
    res.json({
        answer: a + b
    })
})

app.listen(3000)