type NotReadonlyButOptional<T> = {
    -readonly [P in keyof T]?: T[P]
}

interface IUserAcc {
    readonly name: string;
    readonly age: number;
    info: { male: boolean };
    subject?: string[]
}

let v: NotReadonlyButOptional<IUserAcc> = {
    age: 35
}

v.age = 21;


type KeyOfWithExclude<T, E> = {
    [P in keyof T]: T[P] extends E ? never : P
}[keyof T]

/* {
   name: string;
   age: number;
   info: never
   subject?: string[]
}
*/

let v0: keyof IUserAcc // name | age | info | subject
let v1: KeyOfWithExclude<IUserAcc, { male: boolean } | string> = 'age'
let v2: KeyOfWithExclude<IUserAcc, string> = 'name' //  age | info | subject
let v3: KeyOfWithExclude<IUserAcc, { male: boolean }> = 'age' //  age | name | subject
let v4: KeyOfWithExclude<IUserAcc, { male: boolean }> = 'subject'



type CapitalizedAndGet<T> = {
    [K in keyof T as `get${Capitalize<string & K>}`]: () => T[K]
}

let userGetter: CapitalizedAndGet<IUserAcc> = {
    getName: () => 'Ihor',
    getAge: () => 35,
    getInfo: () => ({ male: true }),
    getSubject: () => ['js', 'ts']
}

type RemoveField<T, E> = {
    readonly [K in keyof T as Exclude<K, E>]: T[K]
}

const u: RemoveField<IUserAcc, 'info' | 'subject'> = {
    name: 'Ihor',
    age: 35,
}