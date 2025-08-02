//Difference b/w Synchronous and Asynchronous Code!!

function sum(a,b){
    return a+b       //parseInt(a) + parseInt(b) to get int
}
let ans = sum(2,3)      //int 
let a = sum('20',30)  //string 
console.log(a)

function s(n){
    let j=0
    for(let i=1;i<=n;i++){
        j=j+i
    }
    return j
    // return (n*(n+1))/2
}
const k = s(5)            //learn different variable types in JS
console.log(k)

const fs = require("fs"); //importing File system library

var user ={
    age:21,
    name:"chanshi",
    calculateAge:function(){
        return this.age;
    }
}

console.log(user.calculateAge());

//Sync - blocks until done
const contents2 = fs.readFileSync("a.txt","utf-8");  //just used a.txt could use ./a.txt aswell 
console.log(contents2);


// Async with callback — non-blocking
fs.readFile("b.txt", "utf-8", (err, data) => {
  if (err) console.error(err);
  else console.log(data);
});

function print(err,data){
    if(err) console.error(err);
    else console.log(data);
}

fs.readFile("a.txt", "utf-8", print); //using print function as callback

//better to use semicolons everywhere has some weird syntax rules


//passing func as argument

function dooperation(a,b,sum){
    return sum(a,b)
}

function hello(){
    console.log("Hello World");
}

//Understand concepts call stack,callback queue,web apis

setTimeout(hello, 2000); //asynchronous function, will run after 2 seconds

let x=dooperation(2,3,sum)
console.log(x)




