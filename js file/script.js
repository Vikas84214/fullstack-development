// change event 
let form = document.querySelector("form");

form.addEventListener("submit", function(event){
    event.preventDefault();
});
let user = document.querySelector("#user");

//user.addEventListener("change", function(){
    //console.log("changed event ");
    //console.log("final value =", this.value);

//});

//input event
user.addEventListener("input", function(){
    console.log("input event ");
    console.log("final value =", this.value);

});


