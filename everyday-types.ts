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

// NOTE Sometimes, you'll have a union where all the members have something in common. For example, both ARRAYS and STRINGS have a 'slice' method. If every member in a union has a property name in common, you can use that property without narrowing:

function getFirstThreee(x: number[] | string) {
    return x.slice(0, 3);
}

// console.log(getFirstThreee([3, 27, 88]));
// console.log(getFirstThreee('Jonathan'));


// SECTION Type Aliases

// NOTE Instead of hard-writing types directly into objects or as parameters in functions, we can create type aliases to use the same type more than once and refer to it by a single name.

type Point = {
    x: number;
    y: number;
};

function printCoordinates(pt: Point) {
    console.log(`The coordinate's x values is ${pt.x}`);
    console.log(`The coordinate's y value is ${pt.y}`);
}

printCoordinates({x: 100, y: 237});


// NOTE - You can use a type alias to give a name to ANY type at all, including a union type (below):

type ID = string | number;

function shoutTheId(id: ID) {
    console.log(`My ID is ${id}!`);
}

shoutTheId('Jonathan');
shoutTheId(42);

// NOTE - Note that aliases are ONLY aliases -- you cannot use type aliases to create different / distinct "versions" of the same type. When you use the alias, it's exactly as if you had written the aliased type. In other words, this code might look illegal, but is OK according to TypeScript because both types are aliases for the same type:
// NOTE - Follow up with note on dynamic programming.
