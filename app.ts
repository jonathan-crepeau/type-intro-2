console.log('This that pink venom..');

function printName(obj: {first: string; last?: string}) {
    if (obj.last) {
        return `Hello, my full name is ${obj.first} ${obj.last}`;
    } else {
        return `Hello, my name is ${obj.first}`;
    }
};

console.log(printName({first: "Jonathan"}));
console.log(printName({first: "Jonathan", last: "Crepeau"}));
