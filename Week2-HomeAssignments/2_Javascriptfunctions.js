//Task 1: Function Declaration
function userProfile(name){
    console.log(`Hello ${name}!`)
}
userProfile("kavitha")

//Task 2: Arrow Function 
const double = (num) =>{
    let multiply = num*2
console.log(multiply)
}
double(8)

//Task 3: Anonymous Function 
setTimeout(function (){
    console.log("This message is delayed by 2 seconds")
}, 2000) 

//Task 4: Callback Function  
function getUserData(callback) {
    setTimeout(function (){
        callback()
}, 3000) 
}
function displaymessage(){
console.log("Call Back Function after 3 seconds")
}
getUserData(displaymessage)
