const digit: 1 | 2 | 3 | 4 | 5;

// type Ease = 'ease';
// type Direction = 'in' | 'out';
//
// interface IAnimationOptions {
//     delay: number,
//     easing: `${Ease}-${Direction}`      // 'easy-in' | 'easy-out'
// }
//
// function animate(options: IAnimationOptions) {
//
// }
//
// animate({delay: 1000, easing: 'ease-out'});

// const enum AnimationType {
//     EASE_IN = 'ease-in',
//     EASE_OUT = 'ease-out',
// }
//
// interface IAnimationOptions {
//     delay: number,
//     easing: AnimationType     // 'easy-in' | 'easy-out'
// }
//
// function animate(options: IAnimationOptions) {
//
// }
//
// animate({delay: 1000, easing: AnimationType.EASE_IN});

// enum Size {
//     S = 42,
//     L = 46,
//     XL = 52
// }
//
//
// enum UserActions {
//     UPDATE = 'UPDATE USER',
//     CREATE = 'CREATE USER',
//     REMOVE = 'REMOVE USER',
//     DELETE =  REMOVE
// }
//
// let size: Size = Size.XL

// type arrEl = boolean[];
// // const array: arrEl[] = [[true, false]];

interface IFact {
    factId: number;
    useFrom: string;
    useTo: string;
}
type newType =  IFact[ 'factId' |  'useFrom'];

let sn: newType = true;

const dataList: { action: string, data: IFact }[] = [];

const uniqueValue = (): keyof IFact  => {  // 'factId' |  'useFrom' |  'useTo'
    return 'factId';
}

dataList.map((item: { action: string, data: IFact }) => {
    if (item.data[uniqueValue()]) {

    }
    return item;
})
