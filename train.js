// D-TASK: 

// Shunday function tuzing, u 2ta string parametr ega bolsin, hamda agar har ikkala string bir hil harflardan iborat bolsa true aks holda false qaytarsin
// MASALAN checkContent("mitgroup", "gmtiprou") return qiladi true;

// Masalani yechimi 

let isAnagram = function (a, b) {
  let freqMap = {};

  for (let letter of a) {
    freqMap[letter] = (freqMap[letter] || 0) + 1;
  }

  for (let bLetter of b) {
    if (!freqMap[bLetter] || freqMap[bLetter] === 0) {
      return false;
    } else {
      freqMap[bLetter]--;
    }
  }
  return true;
};

let a = "mitgroup";
let b = "igmtprou";

console.log(isAnagram(a, b));
