//dom event and mouse//pointer event
let btns = document.querySelectorAll("button");
for(btn of btns){
    btn.onmouseenter = function(){
        console.log("you enter a button");
    }
    btn.onclick = sayHello;

}
//btn.onclick = function(){
    //console.log("button was clicked");

//};

function sayHello(){
    console.log("hello");

}
btn.onclick = sayHello;

// event listner
let btns = document.querySelectorAll("button");

for(btn of btns){

    // btn.addEventListener("click", sayHello);
    // btn.addEventListener("click", sayName);
    btn.addEventListener("dblclick", function(){
        console.log("you double clicked me");
    });
}

function sayHello(){
    alert("hello");
}

function sayName(){
    alert("Name");
}

//Activity
let btn = document.querySelector("button");

btn.addEventListener("click", function(){
    let h3 = document.querySelector("h3");
    let randomColor = getRandomColor();
    h3.innerText = randomColor;

    let div = document.querySelector("div");
    div.style.backgroundColor = randomColor;


    console.log("color updated");
    
});

function getRandomColor(){
    let red = Math.floor(Math.random() * 255);
    let green = Math.floor(Math.random() * 255);
    let blue = Math.floor(Math.random() * 255);

    let color = `rgb(${red}, ${green}, ${blue})`;
    return color;

}

//event listner for element
let p = document.querySelector("p");

p.addEventListener("click", function(){
    console.log("paragraph was clicked");
});

// for div event listener
let box = document.querySelector(".box");

box.addEventListener("mouseenter", function(){
    console.log("mouse inside box");
});

// this keyword in event listener 
// this first way
/*let btn = document.querySelector("button");
let h1 = document.querySelector("h1");
let h3 = document.querySelector("h3");
let p = document.querySelector("p");

btn.addEventListener("mouseenter", function(){
    console.dir(this.innerText);
    this.style.backgroundColor = "blue";
});

h1.addEventListener("mouseenter", function(){
    console.dir(this.innerText);
    this.style.backgroundColor = "blue";
});

h3.addEventListener("mouseenter", function(){
    console.dir(this.innerText);
    this.style.backgroundColor = "blue";
});

p.addEventListener("mouseenter", function(){
    console.dir(this.innerText);
    this.style.backgroundColor = "blue";
});*/ 

// this keyword in event listener 
// this secound  way
let btn = document.querySelector("button");
let h1 = document.querySelector("h1");
let h3 = document.querySelector("h3");
let p = document.querySelector("p");

function changeColor(){
    console.dir(this.innerText);
    this.style.backgroundColor = "blue";

}

btn.addEventListener("mouseenter", changeColor);

h1.addEventListener("mouseenter", changeColor);

h3.addEventListener("mouseenter", changeColor);

p.addEventListener("mouseenter", changeColor);


// keyboard event gaming sense
/*let btn = document.querySelector("button");

btn.addEventListener("click", function(event){
    console.log(event);
    console.log("button was clicked");
});

btn.addEventListener("dblclick", function(event){
    console.log(event);
    console.log("button was clicked");
});*/

let inp = document.querySelector("input");

inp.addEventListener("keydown", function(event){
    console.log("code =",event.code);// arrowup, arrowdown, arrowleft, arrowright
    if(event.code == "ArrowUp"){
        console.log("character move farword");
    }else if(event.code == "ArrowDown"){
        console.log("character move backword");
    }else if(event.code == "Arrowleft"){
        console.log("character move Left");
    }else{
        console.log("character move right");
    }

});

// keyboard event
//inp.addEventListener("keyup", function(){
    //console.log("key was released");
//});

//form events
let form = document.querySelector("form");

//form.addEventListener("submit", function(event){
    //event.preventDefault();
    //console.log("form submitted");
//});

//Extract form data

form.addEventListener("submit", function(event){
    event.preventDefault();

    //let inp = document.querySelector("input");
    let user = document.querySelector("#user");
    let pass = document.querySelector("#pass");
    console.log(user.value);
    console.log(pass.value);
});
