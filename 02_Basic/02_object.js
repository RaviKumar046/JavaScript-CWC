// const tinderuser=new Object()
const tinderuser={}

tinderuser.id="123abc"
tinderuser.name="tommy"
tinderuser.isloggeIn=false

//  console.log(tinderuser);


const regularUser={
    email:"tapu@gmail.com",
    fullname:{
        userfullname:{
            firstname:"Ravi",
            lastname:"chaudhary"
        }
    }
}
 
// console.log(regularUser.fullname.userfullname.firstname)

const obj1={1:"a",2:"b"}
const obj2={3:"a",4:"b"}
const obj4={5:"a",6:"b"}

//const obj3={obj1 ,obj2}
// const obj3=Object.assign({},obj1,obj2,obj4)
const obj3={...obj1,...obj2}
console.log(obj3);