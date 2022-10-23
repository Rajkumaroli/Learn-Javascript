const array = [1,2,3,[3.1,3.2,[3.21,3.22]],4];
// let flat = array.reduce((accum,cuvalue)=>{
//     return accum.concat(cuvalue);
// })
console.log(array.flat(Infinity));
const obj = {
    name:"Raj",
    cast:"oli",
    address:"Rolpa"
}
const obj1 = Object.entries(obj);
console.log(Object.fromEntries(obj1));