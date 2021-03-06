/***Object/Fn*/

// interface IPoint {
//     x: number;
//     y: number;
// }
//
// type TPoint = {
//     x: number;
//     y: number;
// }
//
//
// let p1: IPoint;
// let p2: TPoint;
//
// interface ISetPoint {
//     (x: number, y: number): any;
// }
//
//
//
// type TSetPoint =  (x: number, y: number) => number;
//
//
// let fn2: TSetPoint = (x: number, y: number) => {
//     return x + y;
// }
//
// function Fn(param1: ISetPoint) {
//
// }
//
// class MyPoint {
//     constructor(x: number, y: number) {
//     }
// }
//
// class MyPoint1 {
//     constructor(x: number, y: number) {
//     }
// }
//
// function fn1(x: number, y: number) {
// }
//
// const inst: MyPoint = new MyPoint(1, 2);
// Fn(MyPoint1);

/*extend */
type TPointX = { x: number };
type TPointY = { y: number };


interface IPointX {
    x: { point?: number };
    y: string
}

interface IPointY {
    x: { point1: string };
    y: number;
}

type TPoint = TPointX & IPointY;

interface IPoint extends IPointX, IPointY {
    x: { point1: string } & { point: number },// {point1: string , point: number }
    y: string & number;
}

// string & null

let p: IPoint = {
    x: {point1: '1', point: 1},
    y:
}

/**implements**/

class MyPoint implements IPoint {
    x = {point1: '1', point: 1};
    y = 11;
}


type SB = string | boolean;

let p3: IBasePoint = {
    x: 10,
    y: 10,
    z: 10,
}

interface IBasePoint {
    x: number;
}

interface IBasePoint {
    y: number;
}


interface IBasePoint {
    z: number;
}
