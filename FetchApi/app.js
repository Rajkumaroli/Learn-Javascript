// const btn1 = document.getElementById("btn1");
// const btn2 = document.getElementById("btn2");
// const text = document.getElementById("text");

// function getData(){
//     let url = "raj.txt";
//     fetch(url).then((Response)=>{
//         console.log("Inside first then")
//         return Response.text();
//     }).then((data)=>{
//         console.log("Inside second then")
//         console.log(data);
//     })
// }

// function getData(){
//     fetch("https://api.github.com/users").then((Response)=>{
//         console.log("Inside first then")
//         return Response.json();
//     }).then((data)=>{
//         console.log("Inside second then")
//         console.log(data);
//     })
// }
// console.log("Before Running getData");
// getData();
// console.log("After Running getData");

async function raj(){
    console.log("Inside the Raj");
    const Response = await fetch("https://api.github.com/users");
    console.log("Before the Running Response");
    const users = await Response.json;
    console.log("After the running Response");
    return users;
}


console.log("Before calling raj")
let a = raj();
console.log("After calling raj")
a.then(data=>console.log(data))
console.log(a)
console.log("Last calling");