async function greet(){
    return "hello world!";//return a promise
}

let hello = async () => {}; //return a promise

async function greet(){
    //throw "404 page not found";
    return "hello";
}

greet()
.then((result) => {
    console.log("promise was resolved");
    console.log("result was : ", result);
})
.catch((err) => {
    console.log("promise was rejected with err ", err);
});

//await keyword

function getNum(){
    return new Promise((resolve, reject) =>{
        setTimeout(()=> {
            let num = Math.floor(Math.random() * 10) + 1;
            console.log(num);
            resolve();
        },1000)
    });
}

async function demo(){
    await getNum();
    await getNum();
    await getNum();
}
/*async function show(){
    await colorChange("violet",1000);
    await colorChange("indigo",1000);
    await colorChange("green",1000);
    await colorChange("yellow",1000);
    await colorChange("orange",1000);

    return "done";
}*/
//using fetch with async - await
let url = "https://catfact.ninja/fact";
async function getFacts(){
    try{
        let res1 = await fetch(url);
        let data1 = await res1.json();
        console.log("data1 - ", data1);

        let res2 = await fetch(url);
        let data2 = await res2.json();
        console.log("data2 - ", data2);

    }catch(e){
        console.log("error : ", e);
    }
}
