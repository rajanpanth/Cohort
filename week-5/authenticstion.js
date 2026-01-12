const express = require("express")
const jwt = require("jsonwebtoken")
const app = express()
const JWT_SECRET = "randomrajan"

app.use(express.json())
const users = [];

//returns a randon wrong string
// function generateToken() {
//     let options = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

//     let token = "";
//     for (let i = 0; i < 32; i++) {
//         // use a simple function here
//         token += options[Math.floor(Math.random() * options.length)];
//     }
//     return token;
// }

app.get("/", function(req, res){
    res.sendFile(__dirname + "/public/index.html")
})

app.post("/signup", function (req, res) {
    const username = req.body.username;
    const password = req.body.password;

    // if(user.find(u => u.username === ))

    users.push({
        username: username,
        password: password
    })

    res.json({
        msg: "you rae signed up"
    })

    console.log(users)

})

app.post("/signin", function (req, res) {
    const username = req.body.username;
    const password = req.body.password;
    let foundUser = null;
    for (let i = 0; i < users.length; i++) {
        if (users[i].username === username && users[i].password === password) {
            foundUser = users[i];
        }
    }

    if (foundUser) {
        const token = jwt.sign({
            username: username,
        }, JWT_SECRET);//convert the username to jwt
        // foundUser.token = token;
        res.json({
            token: token
        })

    }
    else {
        res.status(403).send({
            msg: "invalid username and pass"
        })
    }

    console.log(users)

})

app.use(function(req, res, next){

     const token = req.headers.token;
    const decodedInformation = jwt.verify(token, JWT_SECRET)
    req.username = decodedInformation.username;
    if(decodedInformation){
        next()
    }
    else{
        res.json({
            msg: "you are not signed in"
        })
    }
})

app.get("/me", function (req, res) {
    const token = req.headers.token;
    const decodedInformation = jwt.verify(token, JWT_SECRET) //{username: pantharajan0@gmail.com}
    const username = req.username;

    let foundUser = null;

    for (let i = 0; i < users.length; i++) {
        if (users[i].username == username) {
            foundUser = users[i]
        }
    }

    if (foundUser) {
        res.json({
            username: foundUser.username,
            password: foundUser.password
        })

    }
    else {
        res.json({
            msg: "user not found",
        })
    }
})

app.listen(3000)
