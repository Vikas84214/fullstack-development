// for each function
let arr = [1, 2, 3, 4, 5];
function print(el){
    console.log(el);
}
arr.forEach(print);
arr.forEach(function(el){
    console.log(el);
});
let arr1 = [{
    name: "vikas verma",
    marks: 98,
},
{
   name: "aman verma",
    marks: 97, 
},
{
    name: "rajat verma",
    marks: 96,
},
];
arr1.forEach((student)=> {
    console.log(student.marks);
}); 
// map function
let num = [1, 2, 3, 4];

let double = num.map(function(el){
    return el*el;
});

let students = [{
    name: "vikas verma",
    marks: 95,
},
{
   name: "aman verma",
    marks: 94.4, 
},
{
    name: "rajat verma",
    marks: 92,
},
];

let gpa = students.map((el) => {
    return el.marks/10;
});

// filter function
let nums = [2, 4, 5, 6, 7, 8, 9, 10, 12, 13, 15];
let even = nums.filter((num) => (num % 2 == 0));
//every function
[2, 3, 4, 5, 6].every((el) => (el % 2 == 0));

// reduce function
// reduce the array to a single value
[1, 2, 3, 4, 5].reduce((res, el) => (res+el))

// reduce function make to find max value in the array
let arr3 = [1,2,3,4,5,12,3,41,5,23,66,77,44,32,31,45];
let max = -1;
for (let i=0; i<arr.length; i++){
    if(max<arr[i]){
        max = arr[i];
    }
}

console.log(max);

let max1 = arr.reduce((max1, el) =>{
    if(max<el){
        return el;
    }else{
        return max;
    }
} 
);
console.log(max);

// default parameters 
// giving a default value of a arguments
function sum(a, b = 3){
    return a+b;
}

sum(2);

// spread function
// expands an iterable into multiple values
let arr2 = [1,2,3,4,5,6,7,8,9];
console.log(...arr2);

console.log(..."apnacollege");

// spread array literals

let arr4 = [1, 2, 3, 4, 5];
let newArr = [...arr];

let chars = [..."hello"];

// spread with object literals
let data = {
    email: "ironman@gmail.com",
    password: "abcd",
};

let dataCopy = {...data, id: 123};

// rest- allows a function to take an infinite number of arguments and bundle them in an array
function sum(...args){
    for(let i=0; i<args.length; i++){
        console.log("you give us:", args[i]);
    } 
}

//destructuring
//storing values of array into multiple variables
let names = ["tony", "bruce", "steve", "peter"];
let [winner, runnerup, ...others] = names;
console.log(winner, runnerup);

//destructuring for objects

const student = {
    name: " karan",
    class: 9,
    age: 14,
    subjects: ["hindi", "english", "math", "science", "social studies"],
    username: "karan123",
    password: 1234,
};

const{ username: user, password: pass} = student;
console.log(user);


