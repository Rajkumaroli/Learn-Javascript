//Function Currying:sum(2)(3)(3)
function sum(num1){
    // console.log(num1);
    return function(num2){
        // console.log(num1,num2);
        return function(num3){
            // console.log(num1,num2,num3);
            console.log(num1+num2+num3);
        }
    }
}
sum(4)(5)(6);

//Another Way
const total = (num1)=>(num2)=>(num3)=>console.log(num1+num2+num3);
total(5)(6)(7);