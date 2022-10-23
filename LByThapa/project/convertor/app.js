const calculateTemp = () => {
  const num = document.getElementById("num").value;
  console.log(num);
  const selectTemp = document.getElementById("sinput");
  const selectValue = sinput.options[selectTemp.selectedIndex].value;
//   console.log(selectValue);
  let setOutput = document.getElementById("output");

  const celToFah = (cel) => {
    const fahrenheit = Math.round((cel * 9/5) + 32);
    return fahrenheit;
  };

  const fahToCel = (fah) => {
    const celsius = Math.round((fah - 32) * 5/9);
    return celsius;
  };

  if (selectValue == "cel") {
    const result = celToFah(num);
    setOutput.innerHTML = `${result} °Fahrenheit`;
  } else {
    const result = fahToCel(num);
    setOutput.innerHTML = `${result} °Celsius`;
  }
};
