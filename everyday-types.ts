// SECTION - Union Types

// NOTE A union type is a type formed from two or more other types, representing values that may be any one of those types.
// Below, a function that can operate on strings or numbers:

function printId(id: number | string) {
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

function printingAnID(id: number | string) {
    if (typeof id === 'string') {
        console.log(id.toUpperCase());
    } else {
        console.log(id);
    }
}

// NOTE Another example is to use a function like 'Array.isArray':

function welcomePeople(x: string[] | string) {
    if (Array.isArray(x)) {
        console.log('Hello, ' + x.join(" and ") + '.')
    } else {
        console.log('Welcome, lone traveler ' + x + '.');
    }
}

// welcomePeople(["Jonathan", "Jeremy", "Luna"]);
// welcomePeople('Jonathan');

const benderWelcome = (x: string[] | string) => {
    if (Array.isArray(x)) {
        console.log('Hello, ' + x.join(" and ") + '!');
    } else {
        console.log('Welcome, lone bender ' + x + '!');
    }
}

// benderWelcome(['Korra', 'Mako', 'Bolin']);
// benderWelcome('Tenzin');



// NOTE Sometimes, you'll have a union where all the members have something in common. For example, both ARRAYS and STRINGS have a 'slice' method. If every member in a union has a property name in common, you can use that property without narrowing:

function getFirstThreee(x: number[] | string) {
    return x.slice(0, 3);
}

// console.log(getFirstThreee([3, 27, 88]));
// console.log(getFirstThreee('Jonathan'));


// SECTION Type Aliases

// NOTE - So far, we've been using object types and union types by writing them directly in type annotations. This is convenient, but it's common to want to use the same type more than once and refer to it by a single name. A type alias is exactly that -- a name for any type.

// NOTE - Example: giving a name to an object type:
type Point = {
    x: number;
    y: number;
};

const printCoordinates = (pt: Point) => {
    console.log(`The coordinate's x value is ${pt.x}.`);
    console.log(`The coordinate's y value is ${pt.y}.`);
}

// printCoordinates({x: 102, y: 300});


// NOTE Example: giving a name to a union type:
type ID = number | string;

const printTheId = (id: ID) => {
    console.log(`The id is ${id}.`);
}

// printTheId(24);
// printTheId('__jonathanC');


// SECTION Interfaces

// NOTE An interface decleration is another way to name an object type:

interface thePoint {
    x: number;
    y: number;
}

const printTheCoordinates = (pt: thePoint) => {
    console.log(`The coordinate's x value is ${pt.x}.`);
    console.log(`The coordinate's y value is ${pt.y}.`);
}

printTheCoordinates({x: 200, y: 4002});