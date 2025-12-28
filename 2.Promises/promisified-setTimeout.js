function setTimeoutPromisified(duration){
    return new Promise(function(resolve){
        setTimeout(resolve, duration)
    })
}
function callback(){
    console.log("hello")
}
setTimeoutPromisified(5000).then(callback)