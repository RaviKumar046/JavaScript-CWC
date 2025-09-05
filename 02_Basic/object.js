
const mySym=Symbol("key1")

const jsuser={
    name:"Ravi",
    "full name":"Ravi Chaudhary",
    [mySym]:"mykey1",              // syntax
    age:20,
    location:"Bihar",
    email:"Ravi@nitdelhi.ac.in",
    isloggedIn:false,
    lastLoginDays:["Monday" ,"Saturday"]
}

// console.log(jsuser.email);
// console.log(jsuser["email"]);
// console.log(jsuser["full name"]);
// console.log(jsuser.mySym);

jsuser.email="ravi@google.com"
console.log(jsuser);
jsuser.greeting=function(){
    console.log("hello js user");

}
jsuser.greetingTwo=function(){
    console.log(`hello js user ,${this.name}`);

}
console.log(jsuser.greeting());
console.log(jsuser.greetingTwo());
