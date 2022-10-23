//higher and callback function
const add = (a,b)=>{
    return a+b;
}
const subs= (a,b)=>{
    return Math.abs(a-b);
}
const mul = (a,b)=>{
    return a*b;
}
const divide = (a,b)=>{
    return a/b;
}
//higher order function:calculate is higher order function because contains one function as a argumens
//callback function:add,subs,mul,divide are callback function since as a argument in calculate function
const calculate = (num1,num2,oprator)=>{
    return oprator(num1,num2);
}
console.log(calculate(5,2,subs));
console.log(calculate(5,2,add));
console.log(calculate(5,4,mul));
console.log(calculate(10,2,divide));