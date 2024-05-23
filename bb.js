const validator = require("validator");

function countDigits(number) {
    let count = 0;
  for (let item of number) {
    if (validator.isNumeric (item)){
        count++;
    }
  }
  return count;
}

console.log(countDigits("ffgf544"));

