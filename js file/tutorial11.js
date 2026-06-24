// call stack
function hello(){
    console.log("inside hello function");
    console.log("hello");
}

function demo(){
    console.log("calling hello function");
    hello();
}
console.log("calling demo function");
demo();
console.log("Done, bye");

//visualiging of call stack
function one(){
    return 1;
}
function two(){
    return one() + one();
    }
function three(){
    let ans = two() + one();
    console.log(ans);
    }
three();

//breakpoints
//source wali file
// js is single threaded
setTimeout(function(){
    console.log("apna college");
}, 2000);

console.log("hello...");

//callback hell
h1 = document.querySelector("h1");
function changeColor(color, delay){
    setTimeout(() =>{
        h1.style.color = color;
    },delay);
}
changeColor("red", 1000);
changeColor("yellow", 2000);
changeColor("green", 3000);
changeColor("pink", 4000);
changeColor("orange", 5000);
changeColor("blue", 6000);

//callback hell
function savetoDb(data, success, failure){
    let internetSpeed = Math.floor(Math.random() * 10) + 1;
    if(internetSpeed > 4){
        success();
    }else{
        failure();
    }
}
savetoDb(
    "apna college",
     ()=>{
    console.log("Success : your data is saved");
    savetoDb(
        "hello world", 
         ()=>{
         console.log("Success2 : your data is saved");
         savetoDb(
            "Vikas Verma",
             ()=>{
              console.log("Success3 : your data is saved");
            },
            () =>{
            console.log("failiar3 : weak cinnection data is not saved");
            }
        );
    },

    () =>{
    console.log(" failiar2 : weak cinnection data is not saved");
}
);
},
() =>{
    console.log(" failiar1 : weak cinnection data is not saved");
}
);

//promises  
function savetoDb(data){
    return new Promise((resolve, reject) =>{
        let internetSpeed = Math.floor(Math.random() * 10) + 1;
        if(internetSpeed >4 ){
            resolve(" data is saved ");
        }else{
            reject("connection is weak");
        }
    });
  }

let request = savetoDb("apna college");
request.then(() => {
    console.log("promise was resolved");
    console.log(request);
})
.catch(() => {
    console.log(" data1 saved : promise was rejected");
    console.log(request);
})

// promise chaining
savetoDbPromise("apna college")
.then(() => {
    console.log("promise1 resolved");
    return savetoDbPromise("hello world");
})
.then(() => {
    console.log("promise2 resolved");
})
.catch(() =>{
    console.log("some promise rejected");
});

//refactoring old code
setTimeout(function(){
    console.log("apna college");
}, 2000);

console.log("hello...");

//callback hell
h1 = document.querySelector("h1");
function changeColor(color, delay){
    return new Promise((resolve, reject) =>{
        setTimeout(() => {
            h1.style.color = color;
            resolve("color changed")
        }, delay)
    })
    setTimeout(() =>{
        h1.style.color = color;
    },delay);
}
/*changeColor("red", 1000);
changeColor("yellow", 2000);
changeColor("green", 3000);
changeColor("pink", 4000);
changeColor("orange", 5000);
changeColor("blue", 6000);*/