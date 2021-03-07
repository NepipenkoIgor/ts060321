// T extends U ? X : Y;

type nonUndefined<T> = T extends undefined | number ? never : T;
type snbu = string | boolean | undefined | number
const a: nonUndefined<string | boolean | undefined | number> = null;

interface IHydrantM {
    name: string;
}

interface IHydrantA {
    name: string;
}

interface IHydrantB {
    name: string;
}

// TODO
type Hydrants = IHydrantM | IHydrantA | IHydrantB;

let h: IHydrantM = {
    name: 'hydrant'
}

type E<T> = T extends IHydrantA ? never : T


const e: Exclude<Hydrants, IHydrantM> = h;
//

// First element in tuple and get return value

const arr: [() => boolean, () => null | number] = [];


// type FirstElReturnType<T> =
//      T extends [infer U, ...unknown[]]
//          ? U extends (...args: unknown[]) => infer R
//              ? R
//              : never
//          : never

// type FirstElReturnType<T> =
//     T extends [infer U, ...unknown[]]
//         ? ReturnType<U>
//         : never
//
// const v2: FirstElReturnType<typeof arr> = 1;


type Fn1 = (a: number) => (b: number) => number;

// (a: number, b: string) => boolean  ====> number |  string | boolean

type NonFunction<T> = T extends (...args: any) => any ? never : T;

type FnParamsAndReturn<T> = T extends (...args: infer Args) => infer R
    ? NonFunction<Args[keyof Args]> | R
    : never


const v4: FnParamsAndReturn<(a: number, b: string) => boolean> = ()=>{}


interface Example {
    prop1: number;
    prop2: string;

    prop3(): boolean
}


interface Example {
    prop1: number;
    prop2: string;

    prop3(): boolean;
    prop4(): number;
}

const aa: NonFunction<Example[keyof Example]>  = true

