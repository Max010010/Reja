// E-TASK:

// Shunday function tuzing, u bitta string argumentni qabul qilib osha stringni teskari qilib return qilsin.
// MASALAN: getReverse("hello") return qilsin "olleh"

// Masalani yechimi

function getReverse(inputString) {
  return inputString.split("").reverse().join("");
}
let result = getReverse("hello");

console.log(result);
