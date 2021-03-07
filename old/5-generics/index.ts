// Type/ Interface/ function/ class

interface IMaleInfo {
    male: boolean
}
interface IAccount<Info extends IMaleInfo, Id = string> {
    id: Id;
    firstName: string;
    info: Info
}

let user1: IAccount<IMaleInfo> = {
    id: 'asdas124124',
    firstName: 'Ihor',
    info: {male: true}
}

let admin: IAccount<{ subjects: string[] } & IMaleInfo, number> = {
    id: 123123,
    firstName: 'Elena',
    info: {subjects: ['ts', 'js'], male: false}
}


let arr: Array<number>




interface IUser {
    name: string;
    age: number;
}

interface IProduct {
    name: string;
    price: number;
}

interface ICartProduct extends IProduct {
    count: number;
}

interface IState {
    user: IUser;
    products: IProduct[];
    cartProducts: ICartProduct[];
}


let el = document.getElementById('id');

type Select<T> = <K extends keyof T>(state: T, field: K) => T[K];

const state: IState = {
    user: {name: 'Ihor', age: 35},
    products: [{name: 'IPhone 8', price: 1000}, {name: 'IPhone XR', price: 1500}],
    cartProducts: [{name: 'IPhone 8', price: 1000, count: 10}],
}

const select: Select<IState> = (state, field) => state[field];

const user3: IUser = select(state, 'user');
const product: IProduct[] = select(state, 'products');
const cart: ICartProduct[] = select(state, 'cartProducts');
