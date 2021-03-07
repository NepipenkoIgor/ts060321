import { Range, CheckTypeInRuntime, Debounce, LogInputValue, SavePersitence } from "./decorators";


class SearchComponent {

    @CheckTypeInRuntime
    @SavePersitence
    public initialValue!: string;

    public constructor(
        private readonly inputEl: HTMLInputElement
    ) {
        this.inputEl.addEventListener('input', this.onSearch.bind(this))
        console.log(this.initialValue)
    }

    @Debounce(300)
    @LogInputValue
    private onSearch(event: Event) {
        // do something
        const value = (event.target as HTMLInputElement).value;
        this.initialValue = value;
    }
}

const inputEl: HTMLInputElement = document.querySelector('input') as HTMLInputElement;
new SearchComponent(inputEl)


class Calculator {
    // @Validate
    public updatePercentage(
        oldValue: number,
        @Range(30, 70) newValue: number
    ) {
        console.log(oldValue, newValue)
    }
}

const calc = new Calculator();
calc.updatePercentage(20, 40)

setTimeout(() => {
    // (sC.initialValue as any)  = 12;
    calc.updatePercentage(40, 80)
}, 5000)