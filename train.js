const moment = require("moment");

class Shop {
    non;
    lagmon;
    cola;
    
    constructor(non, lagmon, cola) {
        this.non = non;
        this.lagmon = lagmon;
        this.cola = cola;
    }
    qoldiq() {
        console.log(`${moment().format("hh:mm")} da ${this.non} ta non, ${this.lagmon} ta lagmon, ${this.cola} ta cola bor`)
    };
    sotish(non) {
        this.non = this.non - non;
    };
    qabul(cola) {
        this.cola = this.cola + cola;
    };
}

const newshop = new Shop(4, 5, 2)
newshop.qoldiq();
console.log("****************");
newshop.sotish(3);
newshop.qoldiq();
console.log("****************");
newshop.qabul(4);
newshop.qoldiq();