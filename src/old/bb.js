// const comment = /^<!\--/
//
// console.log(comment.test('<!--'));
/*

const ncname = '[a-zA-Z_][\\w\\-\\.]*'

console.log(new RegExp(ncname).test('a2ss'));*/
/*

let str = '12345678';

console.log(str.substring(3));*/
/*

const attribute = /^\s*([^\s"'<>\/=]+)(?:\s*(=)\s*(?:"([^"]*)"+|'([^']*)'+|([^\s"'=<>`]+)))?/

console.log('name="lipeng"'.match(attribute));*/


const stripParensRE = /^\(|\)$/g

console.log(stripParensRE.test(')'));