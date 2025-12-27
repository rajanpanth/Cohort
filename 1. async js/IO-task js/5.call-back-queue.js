console.log("hi!")

function callback(){
    console.log("hello wrld");
}
setTimeout(callback, 1000);
let c = 0;

for(let i = 0; i<10000000000; i++){
    c++
}
console.log(c);