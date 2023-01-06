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
var benderWelcome = function (x) {
    if (Array.isArray(x)) {
        console.log('Hello, ' + x.join(" and ") + '!');
    }
    else {
        console.log('Welcome, lone bender ' + x + '!');
    }
};
// benderWelcome(['Korra', 'Mako', 'Bolin']);
// benderWelcome('Tenzin');
// NOTE Sometimes, you'll have a union where all the members have something in common. For example, both ARRAYS and STRINGS have a 'slice' method. If every member in a union has a property name in common, you can use that property without narrowing:
function getFirstThreee(x) {
    return x.slice(0, 3);
}
var printCoordinates = function (pt) {
    console.log("The coordinate's x value is ".concat(pt.x, "."));
    console.log("The coordinate's y value is ".concat(pt.y, "."));
};
var printTheId = function (id) {
    console.log("The id is ".concat(id, "."));
};
var printTheCoordinates = function (pt) {
    console.log("The coordinate's x value is ".concat(pt.x, "."));
    console.log("The coordinate's y value is ".concat(pt.y, "."));
};
// printTheCoordinates({x: 200, y: 4002});
// NOTE Just like when we used a type alias above, the example works just as if we had used an anonymous object type. TypeScript is only concerned with the struture of the value we passed to printTheCoordinates -- it only cares that it has the expected propreties. Being concerned only with the structure and capabilities of types is why we call TS a 'structurally typed' type system.
// SECTION Differences Between Type Aliases and Interfaces
// NOTE (Youtube - https://www.youtube.com/watch?v=crjIq7LEAYw&t=143s) By and large, it doesn't matter too much which one you choose. But as TS has matured over the years, the feature sets for both interfaces and type have gotten more and more similar. He prefers interfaces when possible -- interfaces are distinctly built to be used with objects. He uses type for functions.
// NOTE Type aliases and interfaces are very similar, and in many cases you can choose between them freely. Almost all features of an interface are available in type, with the key distinction being that a type cannot be re-opened to add new properties vs. an interface which is always extendable.
// SECTION Type Assertions
// NOTE - See Google Drive ("[Handbook] - Everyday Types") for for info.
// SECTION Literal Types
// NOTE Both 'var' and 'let' allow for changing the values that are held inside the variables.
var changingString = "This that pink venom.";
changingString = "Get 'em, get 'em, get 'em.";
// NOTE - hover (below) with mouse:
changingString;
// NOTE 'Const' does not allow for changing the value in the variable, and TS reflects this.
var constantString = "How you like that.";
// NOTE - hover (below) with mouse:
constantString;
// NOTE By combing literals into unions, you can express a much more useful concept -- for example, functions that only accept a certain set of known values:
function printText(s, alignment) {
    // some code block here
}
// printText('This that pink venom', 'left');
// printText('This that pink venom', 'offcenter');
// NOTE Numeric literal types work the same way:
function compare(a, b) {
    return a === b ? 0 : a > b ? 1 : -1;
}
console.log(compare('Jonathan', 'Luna'));
console.log(compare('aaah', 'New Hampshire'));
console.log(compare('california', 'California'));
console.log(compare('California', 'California'));
