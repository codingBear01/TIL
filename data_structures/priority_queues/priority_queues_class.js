class Queue {
    constructor() {
        this.dataStore = [];
    }

    enqueue(element) {
        this.dataStore.push(element);
    }

    // dequeue(element) {
    //   return this.dataStore.shift(element)
    // }

    // Priority Queues
    dequeue() {
        let priority = this.dataStore[0].code;
        for (let i = 1; i < this.dataStore.length; i++) {
            if (this.dataStore[i].code < priority) {
                priority = i;
            }
        }
        return this.dataStore.splice(priority, 1);
    }

    front() {
        return this.dataStore[0];
    }

    back() {
        return this.dataStore[this.dataStore.length - 1];
    }

    // function toString() {
    //     let retStr = '';

    //     for (let i = 0; i < this.dataStore.length; i++) {
    //         retStr += this.dataStore[i] + '\n';
    //     }

    //     return retStr;
    // }

    // Priority Queues
    toString() {
        let retStr = '';

        for (let i = 0; i < this.dataStore.length; i++) {
            retStr += `${this.dataStore[i].name} code: ${this.dataStore[i].code}\n`;
        }

        return retStr;
    }

    empty() {
        return this.dataStore.length === 0 ? true : false;
    }
}

class Patient {
    constructor(name, code) {
        this.name = name;
        this.code = code;
    }
}

let p = new Patient('Smith', 5);
const ed = new Queue();
ed.enqueue(p);
p = new Patient('Jones', 4);
ed.enqueue(p);
p = new Patient('Fehrencach', 6);
ed.enqueue(p);
p = new Patient('Brown', 1);
ed.enqueue(p);
p = new Patient('Ingram', 1);
ed.enqueue(p);
console.log('===the list of waiting patients===');
console.log(ed.toString());

console.log('===first round===');
let seen = ed.dequeue();
console.log(`Patient being treated: ${seen[0].name} ${seen[0].code}`);
console.log(`Patient waiting to be seen:`);
console.log(ed.toString());

console.log('===second round===');
seen = ed.dequeue();
console.log(`Patient being treated: ${seen[0].name} ${seen[0].code}`);
console.log(`Patient waiting to be seen:`);
console.log(ed.toString());

console.log('===third round===');
seen = ed.dequeue();
console.log(`Patient being treated: ${seen[0].name} ${seen[0].code}`);
console.log(`Patient waiting to be seen:`);
console.log(ed.toString());
