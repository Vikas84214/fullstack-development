const max =  prompt("enter the max number");

const random = Math.floor(Math.random() *max )+1;
console.log(max);
function hello(){
    console.log("hello");
}
hello();
function name(){
    console.log("apna college");
}
function print1to5(){
    for(let i=1; i<=5; i++)
        console.log(i);
}
function isAdult(){
    let age = 15;
    if(age>= 18){
        console.log("adult");
    }else{
        console.log("not adult")
    }
}
name();
print1to5();
isAdult();
function printPoem(){
    console.log("Twinkle, Twinkle, Little Star");
    console.log(" is a beloved nursery rhyme that captures the wonder of stars in the night sky.");
}
printPoem();
function rollDice(){
    let rand = Math.floor(Math.random()*6)+1;
console.log(rand);

}
rollDice();
rollDice();
rollDice();
rollDice();
function printInfo(name, age){
    console.log(name, age);
}
printInfo("aman",24);
function printTable(n){
    for(let i=n; i<=n*10; i+=n){
        console.log(i);
    }

}
printTable(12);
// return value without calling function
function sum(a, b){
    return a+b;
}
//this fuction call by this method
let s = sum(7, 8);
console.log(s);

function isAdult(age){
    if(age>=18){
        return "adult";
    }else{
        return "not adult";
    }
}
function getSum(n){
    let sum = 0;
    for(let i=0; i<=n; i++){
        sum +=i;
    }
    return sum;
}
let str = ["hii"," ","hello"," " ,"what are u doing"];

function concat(str){
    let result = " ";
    for(let i=0; i<str.length; i++){
        result += str[i];
    }
    return result;
}
let su = 55; //global scope
function calSu(a, b){
    let su = a+b; //function scope
    console.log(su);
}
calSu(7, 1);
console.log(su);
//block scope
{
    let a = 25;
}
console.log(a);
//block scope

for(let i=1; i<=5; i++){
    console.log(i);
}

//lexical scope
function outerFunc(){
    function innerFunc(){
        console.log(x);
        console.log(y);
    }
    //hoisting means this use varible before declration
    let x = 5;
    let y = 8;
    innerFunc();
}
function outerFunc(){
    let x = 5;
    let y = 8;
    function innerFunc(){
        console.log(x);
        console.log(y);
    }
    //hoisting means this use varible before declration
    innerFunc();
}

let greet = "hello";//global scope

function changeGreet(){
    let greet = "namaste";//function scope
    console.log(greet);
    function innerGreet(){
        console.log(greet);//lexical scope
    }
    innerGreet.log();
}
console.log(greet);
changeGreet();

let name = "Shradha";
const sum = function(a, b){
    return a + b;
}
let hello = function(){
    console.log("hello");
}

//lexical scope
function outerFunc(){
    function innerFunc(){
        console.log(x);
        console.log(y);
    }
}

//Higher Order Functions
//take one or more functions as arguments
function multipleGreet(func, n){
    for(let i=1; i<=n; i++){
        func();
    }
}

let gree = function(){
    console.log("hello");
}

multipleGreet(greet, 1000);

function oddEvenTest(request){
    if(request == "odd"){
        return function(n){
            console.log(!(n%2 == 0));
        }
    }else if(request == "even"){
        return function(n){
            console.log(n%2 == 0);
        }
    }else{
            console.log("wrong request");
    }
}
let request = "odd";
num = 55;
const calculator ={
    add: function(a, b){
        return a + b;
    },
    sub: function(a, b){
        return a - b;
    },
    mult: function(a, b){
        return a * b;
    }
};