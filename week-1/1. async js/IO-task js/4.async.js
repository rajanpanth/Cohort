const fs = require("fs")
function print(err, content){
    console.log(content)
}
fs.readFile("a.txt","utf-8", print);

//OR

fs.readFile("b.txt","utf-8",function(err, content){
    console.log(content)
})
console.log("done!")