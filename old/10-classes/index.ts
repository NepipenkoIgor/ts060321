interface IX {
    x: number
}

class BasePoint implements IX {

    #p: number = 1;

    public constructor(
        public x: number,
        private y: number,
        protected z: number) {

    }

    public sum(): number {
        return 1 + this.y + this.z + this.#p;
    }
}

class MyBasePoint extends Tagged(Timestaped(BasePoint)) {
    constructor(x: number, y: number, z: number) {
        super(x, y, z);
    }

    sum(): number {
        // do something
        return super.sum();
    }
}

const p: MyBasePoint = new MyBasePoint(1, 1, 2);
const v = p.sum();
console.log(p.tags);
console.log(p.timestamped);


// function getFullName(this: { name: string, surname: string }) {
//     return `${this.name} ${this.surname}`;
// }


// let account = {
//     name: 'Ihor',
//     surname: 'Nepipenko',
//     getFullName
// }

// account.getFullName();

class Singleton {
    private static instance: Singleton;
    private constructor() {

    }
    public static getInstance(): Singleton {
        if (!Singleton.instance) {
            Singleton.instance = new Singleton();
        }
        return Singleton.instance;
    }
}

const inst1 = Singleton.getInstance();
const inst2 = Singleton.getInstance();
const inst3 = Singleton.getInstance();
const inst4 = Singleton.getInstance();
const inst5 = Singleton.getInstance();

console.log(inst1 === inst5);


type Constructable = new (...args: any[]) => any;


function Timestaped<BaseClass extends Constructable>(BC: BaseClass) {
    return class extends BC {
        public timestamped = new Date();
    }
}

function Tagged<BaseClass extends Constructable>(BC: BaseClass) {
    return class extends BC {
        public tags = ['ts', 'js'];
    }
}


abstract class AbstractControl<Model> {
    public abstract model: Model;
    public abstract getModel(): Model;

    public onFocus() {

    }

    public onBlur() {

    }
}

abstract class AbstractControlWithSet<T> extends AbstractControl<T> {
    public abstract setModel(v: T): void;
}

interface IDropDownItem {
    text: string;
    value: string
}

class MHDropDown extends AbstractControlWithSet<IDropDownItem[]> {
    public model: IDropDownItem[] = [];
    public getModel(): IDropDownItem[] {
        return this.model;
    }

    public setModel(v: IDropDownItem[]) {

    }
}

class MHInput extends AbstractControl<string> {
    public model: string = '';
    public getModel(): string {
        return this.model;
    }

    public setModel(v: string) {

    }
}
