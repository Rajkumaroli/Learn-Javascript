//syncronization: It Work step by step
/*
const fun2 = ()=>{
    console.log("Fun2 Execucated!!!!!!!!!!!!!");
}
const fun1 = ()=>{
    console.log("Fun1 Execucated!!!!!!!!!!");
    fun2();
    console.log("Fun1 Again Execucated!!!!!!!");
}
fun1(); */

//Asynchronization: It Work together
const fun1 = () =>{
    setTimeout(()=>{
        console.log("Fun1 Execucated!!!!!!!");
    },3000);
}

const fun2 = ()=>{
    console.log("Fun2 Execucated!!!!!!!");
    fun1();
    console.log("Fun2 Again Execucated!!!!!!!!");
}
fun2();