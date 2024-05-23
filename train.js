// A-TASK: 
// Shunday 2 parametrli function tuzing, hamda birinchi parametrdagi letterni ikkinchi parametrdagi sozdan qatnashga sonini return qilishi kerak boladi.
// MASALAN countLetter("e", "engineer") 3ni return qiladi.

// Masalani yechimi:
function countLetter(a, b) {
    if (typeof a !== 'string' || a.length !== 1) {
        return "1 parametrga faqat bitta belgi kiriting";
    }

    if (typeof b !== 'string') {
        return "2 parametrga so'z kiriting";
    }

    let count = 0;

    for (let i = 0; i < b.length; i++) {
        if (b[i] === a) {
            count++;
        }
    }

    return count;
}
console.log(countLetter("e", "engineer"));



// **************************************************************************************************
// DARSLIK

console.log("Jack Ma maslahatlari");
const list = [
    "yahshi talaba bo'ling", //0-20
    "to'g'ri boshliq tanlang va ko'proq hato qiling", //20-30
    "o'zimgizga ishlashni bolang", //30-40
    "siz kuchli bo'lhan narsalarni qiling", //40-50
    "yoshlarga investitsiya kititing", //50-60
    "endi dam oling, foydasi yo'q endi))", //60 
];

// CALLBACK functions

function maslahatBering(a, callback) {
    if (typeof a !== "number") callback("insert a number", null);
    else if (a <= 20) callback(null, list[0]);
    else if (a > 20 && a <= 30) callback(null, list[1]);
    else if (a > 30 && a <= 40) callback(null, list[2]);
    else if (a > 40 && a <= 50) callback(null, list[3]);
    else if (a > 50 && a <= 60) callback(null, list[4]);
    else {
        setTimeout(function () {
            callback(null, list[5])
        }, 1000);
    };
};

console.log("passed here:", 1);

maslahatBering(65, (err, data) => {
    if (err) console.log('ERROR:', err);
    else {
        console.log('javob:', data);
    };
});

console.log("passed here:", 2);


// **************************************************************************************************

// ASYNC functions

// async function maslahatBering (a) {
//     if (typeof a !== "number") throw new Error("insert a number");
//     else if (a <= 20) return list[0];
//     else if (a > 20 && a <= 30) return list[1];
//     else if (a > 30 && a <= 40) return list[2];
//     else if (a > 40 && a <= 50) return list[3];
//     else if (a > 50 && a <= 60) return list[4];
//     else {
//         return list[5];
//         // setTimeout(function () {
//         //     callback(null, list[5])
//         // }, 1000);
//     };
// };

// then /catch
// console.log("passed here:", 1);

// maslahatBering(61)
// .then((data) => {
//     console.log("javob:", data);
// })
// .catch((err) => {
//     console.log("ERROR:", err);
// });

// console.log("passed here:", 2);


// asyn/await
// async function run() {
//     let javob = await maslahatBering(20);
//     console.log(javob);
//     javob = await maslahatBering(31);
//     console.log(javob);
//     javob = await maslahatBering(41);
//     console.log(javob);
// }

// run();






