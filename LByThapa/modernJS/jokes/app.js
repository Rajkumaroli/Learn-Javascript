// https://icanhazdadjoke.com/
const jokes = document.getElementById("jokes");
const jokesBtn = document.getElementById("jokesBtn");
//Using Permission
/*
const jokesGenerate = ()=>{
    const setHeader = {
        headers:{
            Accept:"application/json"
        }
    }
    fetch("https://icanhazdadjoke.com/",setHeader)
    .then((res)=> res.json())
    .then((data)=>{
        jokes.innerHTML = data.joke;
    })
    .catch((error)=>{
        console.log(error)
    })
}
*/

//Using async and await
const jokesGenerate = async()=>{
    try{
        const setHeader = {
            headers:{
                Accept:"application/json"
            }
        }
        const res = await fetch("https://icanhazdadjoke.com/",setHeader);
        const data = await res.json();
        jokes.innerHTML = data.joke;
    }catch(error){
        console.log(`The error is ${error}`);
    }
   
}
jokesBtn.addEventListener("click",jokesGenerate)
jokesGenerate();