interface IUserAccount {
    firstName: string;
    age: number;
}

//
// const p = IUserAccount;


// const myAccount = {
//     firstName: 'Ihor',
//     age: 35,
// }
//
//
// const p: typeof myAccount = myAccount;
//
//
// class A {
//
// }
//
// let p1: A = new A();


// let v = 1;
//
// v = 12;


let num: number = 1;
num = NaN;
num = Infinity;
num = 0x0101;

const str: string = 'str'

const bool: boolean = true;

const nil: null = null;
const und: undefined = undefined;

const bigInt: bigint = 4n;


const key1: symbol = Symbol('key1');
const key2: unique symbol = Symbol('key2');
const key3 = Symbol('key3');

const strictObj = {
    [key1]: 100,
    [key2]: 100,
    [key3]: 100,
}

strictObj[key1];
strictObj[key2];
strictObj[key3];

function onlyKey2(_value: typeof key2) {

}

onlyKey2(key1);
onlyKey2(key2);
