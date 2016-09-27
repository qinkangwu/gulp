'use strict';

function* say(){
    yield 'a';
    yield 'b';
    yield 'c';
}

let says = say();
console.log(says.next());
console.log(says.next());
console.log(says.next());
console.log(says.next());