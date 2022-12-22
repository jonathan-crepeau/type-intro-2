console.log('Fear is the mindkiller..');

// SECTION - Type Annotations On Variables

const firstName = "Jonathan";
let myName: string = "Jonathan";


// SECTION - Function Type Annoations

function greet(name: string) {
    return `Hello, ${name.toUpperCase()}!!!`;
}

let me = greet("Jonathan Crepeau");
// console.log(me);

function favNum(): number {
    return 17;
}

const myFavNum = ():number => 7;


// SECTION - Anonymous Function type annotations

const names = ["Jonathan", "Jeremy", "Luna"];

// names.forEach((name) => console.log(name.toUpperCase()));


// SECTION - Array type annotations

// NOTE - Within an object

const myObject = {
    favNums: Array<number>,
    location: "San Francisco, CA, USA"
};
