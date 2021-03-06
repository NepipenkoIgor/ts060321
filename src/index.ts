
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

type Select<TState> = <TField extends keyof TState>(state: TState, field: TField) => TState[TField];

const state: IState = {
    user: {name: 'Ihor', age: 35},
    products: [{name: 'IPhone 8', price: 1000}, {name: 'IPhone XR', price: 1500}],
    cartProducts: [{name: 'IPhone 8', price: 1000, count: 10}],
}

const select: Select<IState> = (state, field) => state[field];

const user3: IUser = select(state, 'user');
const product: IProduct[] = select(state, 'products');
const cart: ICartProduct[] = select(state, 'cartProducts');
