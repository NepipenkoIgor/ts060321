const user: {
    readonly firstName: string;
    readonly  age?: number;
} = {
    firstName: 'Ihor',
    age: 35
}


user.age = 21;

let key: keyof (typeof user) = 'asd'  // 'firstName' |  'age'


let userHashMap: {
    [mongoId: string]: {
        readonly firstName: string;
        readonly  age?: number;
    }
} = {
    'asdasdasdaafsdfgs': user
}


// let users: readonly (typeof user)[] = [user, user];
// let nums: readonly  number[] = [1, 2, 3];
//
// users.push(user);
// users[100] = user;
//
// users[1] = 1;
type TUser = {
    readonly firstName: string;
    readonly  age?: number;
}
let userArr: readonly [mongoId: string, user?: TUser] = ['asdasdaadq2312asdf', user];

let strs: [boolean, ...string[], number] = [true, 's', 1];
strs = [true, 's', 'sd', 'sd', 1];

userArr[100] = 1;
userArr.push(user);
