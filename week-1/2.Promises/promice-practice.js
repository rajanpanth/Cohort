function random(resolve){
setTimeout(resolve, 3000)
}

let p = new Promise(random);

function callback(){
    console.log("hello")
}
p.then(callback);