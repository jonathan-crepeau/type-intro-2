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


// SECTION - Array Type Annotations

function printEachArrayItem(arr1: Array<number>) {
    arr1.map((arrItem) => console.log(arrItem + 10));
};


printEachArrayItem([1, 4, 76]);
// printEachArrayItem(["Jonathan", "Jeremy", "Luna"]);
