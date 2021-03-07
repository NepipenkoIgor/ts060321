// function average(a: number, b: number, c: number): string {
//     const avg = (a + b + c) / 3;
//     return `Average is ${avg}`;
// }

// average(1);
// average(1,2);
// average(1,2,'5');
// average(1,2,5);
// const num: number = average(1,2,5);

// function average(a: number, b?: number, c?: number): string {
//     if(b === undefined) {
//         b = 0;
//     }
//     if(c === undefined) {
//         c = 0;
//     }
//     const avg = (a + b + c) / 3;
//     return `Average is ${avg}`;
// }

// average(1);
// average(1,2);
// average(1,2,'5');
// average(1,2,5);
// const num: number = average(1,2,5);


// function average(a: number, b: number = 0, c: number = 0): string {
//     const avg = (a + b + c) / 3;
//     return `Average is ${avg}`;
// }

// average(1);
// average(1,2);
// average(1,2,'5');
// average(1,2,5);
// const num: number = average(1,2,5);

export function isString(arg: string | number): arg is string {
    return typeof arg === 'string';
}



export function average(a: string, b: number): string;
export function average(a: number, b: string): string;
export function average(a: number, b: number, c: number): string;
export function average(...args: (number | string)[]): string {
    let total: number = 0;
    for (const arg of args) {
        if (isString(arg)) {
            total += Number(arg);
            continue;
        }
        total += arg;
    }
    const avg = total / args.length;
    return `Average is ${avg}`;
}

