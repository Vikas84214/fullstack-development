let todo = [];

let req = prompt("please enter your request");

while(true){
    if(req == "quit"){
        console.log("quitting app");
        break;
    }
    if(req == "list"){
        console.log("_________");
        for(let i=0; i<=todo.length; i++){
            console.log(i, todo[i]);
        }
        console.log("_________");

    }else if(req == "qdd"){

        let task = prompt("please enter the task you want to add");
        todo.push(task);
        console.log("task added");
    } if(req == "delete"){
        let idx = prompt("please enter the index")
        todo.splice(idx, 1);
        console.log("task deleted");

    }else{
        console.log("wrong req");
    }
    let req = prompt("please enter your request");

}