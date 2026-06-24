for(let i=0; i<=20; i++){
    console.log("hello world");
}
for(let i=0; i<=15; i++){
    if(i % 2 !==0){
         console.log(i);

    }

}
for(let i=15; i>=1; i--){
    if(i % 2 !==0){
         console.log(i);

    }

}   
for(let i=5; i<=50; i=i+5){
    console.log(i);
}
let n= prompt("write your number");
n= parseInt(n);
for(let i=n; i<n+10; i=i+n){
    console.log(i);
    i++;
}
for(let i=0; i<=3; i++){
    console.log("hello");
    for(let j=0; j<=3; j++){
        console.log(j);
    }
}
let i=1;
while(i<=5){
    console.log(i);
    i++;
}

let t=5;
while(t>=0){
    console.log(t);
    i--;
}

let favourite = "Avtar";
let guess = prompt("guess my fav movie");
while((guess != favourite)&&(guess !="quiet")){
    guess= prompt("please try again ");
}
if(guess == favourite){
    console.log(" congrats");
}else{
    console.log("you quite");
} 

let p = 1;
while(i<=5){
    if(i==3){
        break;

    } 
    console.log(i);
    i++;

}

let fruits = ["mango", "apple", "banana", "litchi", "orange"];
for(let i=0; i<fruits.length; i++){
    console.log([i]);
}

for(let i= fruits.length-1; i>=0; i--){
    console.log(i, fruits[i]);

}

let heroes =[["ironman", "spiderman", "thor"],["superman", "wonder women", "flash" ]];
for(let i=0; i<heroes.length; i++){
    console.log('list #${i)');
    for(let j=0; j<heroes[i].length; j++){
        console.log(heroes[i][j]);
    }
}

let fruitss = ["mango","apple", "banana", "litchi", "orange"];

for(fruitss of fruitss){
    console.log(fruitss);
}

for(char of "apnacollege"){
    console.log(char);
}

let heros = [["ironman", "spiderman", "thor"],["superman", "wonder women", "flash" ]];
for(list of heros){
    for(hero of list){
        console.log(hero);
    }
}