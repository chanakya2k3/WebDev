function random(resolve){
    console.log("Random function executed");
    resolve();
}
let p = new Promise(random);
function callback(){
    console.log("Callback executed");
}
p.then(callback); // Using the promise to execute a callback
console.log(p); // Logging the promise object