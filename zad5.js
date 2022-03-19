function onlyNumbers (input) {
  if(typeof input === 'number') {
    let arrayOfNumbers = String(input).split("");
    console.log(arrayOfNumbers);
  } else {
let arr = input.split("");
let nums = arr.filter((element) => {
  return !isNaN(element);
});
  console.log(nums);
  }
}

onlyNumbers('A243b');
onlyNumbers('1234');