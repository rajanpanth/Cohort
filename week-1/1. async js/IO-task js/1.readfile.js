const fs = require("fs");

const content = fs.readFileSync("a.txt", "utf-8");
console.log(content);