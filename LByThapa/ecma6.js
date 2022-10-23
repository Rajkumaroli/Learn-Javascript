//Rest Operator
/*
function add(a,b,...moreArg){
    console.log("a:",a);
    console.log("b:",b);
    console.log("MoreArg:",moreArg);
}
console.log(add("Red","Green","Blue","SKYBlue","Purple","Grey"));*/

//Spread 
/*
const boys = ['Raj','kamal','sangam','subam'];
const girls = ['manisa','bhumika','kabita'];
const all = [...boys,...girls,"Bivek","Prince"];
console.log(all);*/

//array destructuring
/*
const array1 = [1,2,3];
console.log(array1);
const a1 = array1[0];
const a2 = array1[1];
const a3 = array1[2]
console.log(a1,a2,a3);
const [b1,b2,b3] = array1;
console.log(b1,b2,b3);

const array2 = [1,2,[2.1,2.2],3];
console.log(array2);
const c1 = array2[2][0];
console.log(c1);*/

//Object Destructuring
/*
const obj = {
    name:"Rajkumar oli",
    age:20,
    address:"Rolpa",
    email:"olirajkumar30@gmail.com"
}
const name = obj.name;
console.log(name);
const {name1,age,address,email} = obj;
console.log(`My Name is ${name1} and I'am ${age} year's age. I am From ${address} district and My Email adress is ${email}`);
*/