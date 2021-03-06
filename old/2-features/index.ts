/**let/const*/
let period = 60;
const baseUrl = 'http://localhost';

/**Object */
const firstName = 'Ihor';

const account = {
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

function userMessage([start, end]: TemplateStringsArray, {firstName: name}: typeof account) {
    return `${start}${name}${end}`;
}

console.log(userMessage`Good day, ${person} !!!!`);

// let arr = [1, 2, 3].includes(12);
