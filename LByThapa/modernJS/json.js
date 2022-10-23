//JSON
const info = {
    name:"Rajkumar oli",
    address:"Rolpa"
}
console.log(info);
//To convert object to JSON
const j1 = JSON.stringify(info);
console.log(j1);
//To convert json to object
const obj = JSON.parse(j1);
console.log(obj);