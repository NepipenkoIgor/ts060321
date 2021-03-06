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
