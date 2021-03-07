/**let/const*/
let period = 60;
const baseUrl = 'http://localhost';

/**Object */
const firstName = 'Ihor';

const account: IUser1Account = {
    firstName,
    getName() {
        return this.firstName;
    }
}

/**spread */

const person = {...account};
const dates: number[] = [...[11, 12, 13]];


/**destructoring**/

const {firstName: myName} = account;
const [date] = dates;


/** for of*/
for (const d of dates) {
    console.log(d);
}

/*arrow**/
const sum = (a: number, b: number) => a + b;

/**Class **/
class Point {
    x = 1;

    sum() {
        return this.x + 1;
    }
}


/**template string*/

interface  IUser1Account {
    firstName: string;
    getName(): string;
}

function userMessage([start, end]: TemplateStringsArray, {firstName: name}: IUserAccount) {
    return `${start}${name}${end}`;
}

console.log(userMessage`Good day, ${person} !!!!`);

// let arr = [1, 2, 3].includes(12);

//let {a: {b}}  = {a: {b: 2}};
//let b = a.b;
