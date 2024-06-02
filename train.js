// F-TASK:

// Shunday findDoublers function tuzing, unga faqat bitta string argument pass bolib, agar stringda bir hil harf qatnashgan bolsa true, qatnashmasa false qaytarishi kerak.
// MASALAN: getReverse("hello") return true return qiladi

function findDoublers(str) {
  let seen = new Set();
  for (let char of str) {
    if (seen.has(char)) {
      return true;
    }
    seen.add(char);
  }
  return false;
}

console.log(findDoublers("hello"));
