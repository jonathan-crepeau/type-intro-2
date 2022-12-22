console.log('Fear is the mindkiller..');

// SECTION - Type Annotations On Variables

const firstName = "Jonathan";
let myName: string = "Jonathan";


// SECTION - Function Type Annoations

function greet(name: string) {
    console.log(`Hello, ${name.toUpperCase()}!!!`);
}

console.log(greet("Jonathan"));
console.log(greet('42'));