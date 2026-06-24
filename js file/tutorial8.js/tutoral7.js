const student = {
    name : "vikas",

    age : 12,
    eng : 99,
    math : 98,
    dsa : 100,
    java : 100,

    getAvg(){
        console.log(this);
        let avg = (this.eng + this.math + this.dsa + this.java)/4;
        console.log(avg);
    }
}


function getAvg(){
        console.log(this);
}
try{
console.log(a);
}catch(err){
    console.log("caught an error  a is not define");
    console.log(err);
}
console.log("hello2");
console.log("hello2");
console.log("hello2");
const sum = (a, b)=>{
    console.log(a+b);
};
const cube = (n)=>{
    return n*n*n ;
};

const pow = (a, b)=>{
    return a**b;
}
const fun = (a, b)=>(
    a*b
);
console.log("hi there");

setTimeout(()=>{
    console.log("apna college");


}, 4000)
console.log("welcome to");

id = setInterval(()=>{
    console.log("apna college");
}, 2000);

console.log(id);
// stop
clearInterval(2);

const student1 = {
    name : "aman",
    marks : 95,
    prop : this,  //global scope
    getName: function(){
        console.log(this);
        return this.name;
    },
    getMarks: () => {
        console.log(this); //parents scope
        return this.marks;
    }
};

const a = 5; //global scope
