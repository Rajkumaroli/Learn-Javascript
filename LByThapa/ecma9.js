let name = "Rajkumar".padStart(12);
console.log(name);
let cast = "oli".padEnd(8);
console.log(cast);
const boys = {
    name:"Rajkumar",
    age:20,
    address:"Rolpa",
}
console.log(Object.values(boys));
console.log(Object.entries(boys));
//Spread Operator is also use in object
const captitals = {
    nepal:"Kathmandu",
    india:"New Dellhi",
    china:"Baijing",
    america:"Wasintan DC"
}
const captitals1 = {
    ...captitals,
    astraliya:"Melboarn"
}
console.log(captitals1);
console.log(Object.entries(captitals1));