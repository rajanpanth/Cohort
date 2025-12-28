const fs = require("fs");

function readFileAsync() {
  return new Promise(function(resolve, reject) {
    fs.readFile("1. async js/a.txt", "utf-8", function(err, data) {
      if (err) {
        reject(err);
      } else {
        resolve(data);
      }
    });
  });
}

/// syntactic sugar
async function solve() {
  try {
    const data = await readFileAsync();
    console.log("File read complete");
  } catch (err) {
    console.log("Error reading file:", err);
  }
}
solve()
