function greetings(){
    return "hello world";
}

setTimeout(greetings, 1000); //call back approach #Asynchronous

//can you callback or promise approach


//promisified version of setTimeout
function waitFor3s(resolve){
    setTimeout(resolve,3000);
}
function setTimoutPromisified(){
    return new Promise(waitFor3s);
}
function main(){
    console.log("main is called");
}
setTimoutPromisified().then(main); //promise approach #Asynchronous

//
function random(){
    
}
let p = new Promise(random);
console.log(p);