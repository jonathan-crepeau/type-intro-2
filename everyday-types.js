// SECTION - Union Types
// NOTE A union type is a type formed from two or more other types, representing values that may be any one of those types.
// Below, a function that can operate on strings or numbers:
function printId(id) {
    console.log('Your ID is: ' + id);
}
// printId(101);
// printId("202");
// printId({myID: 22342});
// SECTION - Working With Union Types
// NOTE TS will only allow an operation if it is valid for EVERY MEMBER of the union. For example, if we have a second version of the above example for the union 'string | number' but we call a method on the argument that is only available on 'string', TS will throw an error:
// function printingAnId(id: number | string) {
//     console.log(id.toUpperCase())
// }
// NOTE The solution is to NARROW the union with code, the same you would do in JS without type annotations. Narrowing occurs when TS can deduce a more specific type for a value based on the structure of the code.
// NOTE For example (below), TS knows that only a 'string' value will have a 'typeof' value "string":
function printingAnID(id) {
    if (typeof id === 'string') {
        console.log(id.toUpperCase());
    }
    else {
        console.log(id);
    }
}
// NOTE Another example is to use a function like 'Array.isArray':
function welcomePeople(x) {
    if (Array.isArray(x)) {
        console.log('Hello, ' + x.join(" and ") + '.');
    }
    else {
        console.log('Welcome, lone traveler ' + x + '.');
    }
}
// welcomePeople(["Jonathan", "Jeremy", "Luna"]);
// welcomePeople('Jonathan');
// NOTE Sometimes, you'll have a union where all the members have something in common. For example, both ARRAYS and STRINGS have a 'slice' method. If every member in a union has a property name in common, you can use that property without narrowing:
function getFirstThreee(x) {
    return x.slice(0, 3);
}
function printCoordinates(pt) {
    console.log("The coordinate's x values is ".concat(pt.x));
    console.log("The coordinate's y value is ".concat(pt.y));
}
printCoordinates({ x: 100, y: 237 });
function shoutTheId(id) {
    console.log("My ID is ".concat(id, "!"));
}
shoutTheId('Jonathan');
shoutTheId(42);
