const counters = document.querySelectorAll(".counter");
counters.forEach((counter)=>{
    // console.log(counter);
    counter.innerHTML = 0;
    const updateValues = ()=>{
       const targetValue =  +counter.getAttribute('data-target');
    //    console.log(typeof targetValue)
    //    console.log(targetValue);
    let inr = targetValue / 100;
    let startingValue = +counter.innerHTML;
    // console.log(typeof startingValue)
    // console.log(startingValue)
    if(startingValue < targetValue){
        counter.innerHTML = `${Math.round(startingValue + inr)}`;
        setTimeout(updateValues,10);
    }else{
        counter.innerHTML = targetValue;
    }
    }
    updateValues();
});
