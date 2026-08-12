const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


const storedUserName = "admin";
const storedUserPass = "12345";
const storedRole = "admin";
 rl.question("User name:",function(userName){
 rl.question("Password:",function(userPass){

if(userName === storedUserName &&  userPass === storedUserPass){

    console.log("login successful");
    if(storedRole === "admin" || storedRole === "manager"){
        console.log("Welcome to admin dashboard");
    }
    else{
        console.log("Login user Dashoard");
    }
}
else{
    console.log("Login Failed !");
}
rl.close();
 });
});