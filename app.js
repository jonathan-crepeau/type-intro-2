console.log('Fear is the mindkiller..');
// SECTION - Type Annotations On Variables
const firstName = "Jonathan";
let myName = "Jonathan";
// SECTION - Function Type Annoations
function greet(name) {
    console.log(`Hello, ${name.toUpperCase()}!!!`);
}
console.log(greet("Jonathan"));
console.log(greet('42'));
function favNum() {
    return 17;
}
const myFavNum = () => 7;
