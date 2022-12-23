console.log('Fear is the mindkiller..');
// SECTION - Type Annotations On Variables
const firstName = "Jonathan";
let myName = "Jonathan";
// SECTION - Function Type Annoations
function greet(name) {
    return `Hello, ${name.toUpperCase()}!!!`;
}
let me = greet("Jonathan Crepeau");
// console.log(me);
function favNum() {
    return 17;
}
const myFavNum = () => 7;
// SECTION - Anonymous Function type annotations
const names = ["Jonathan", "Jeremy", "Luna"];
// names.forEach((name) => console.log(name.toUpperCase()));
// SECTION - Array Type Annotations
function printEachArrayItem(arr1) {
    arr1.map((arrItem) => console.log(arrItem + 10));
}
;
printEachArrayItem([1, 4, 76]);
// printEachArrayItem(["Jonathan", "Jeremy", "Luna"]);
