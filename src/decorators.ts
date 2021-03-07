import 'reflect-metadata';

export function LogInputValue(target: any, key: string, descriptor: PropertyDescriptor): PropertyDescriptor {
    const originalValue = descriptor.value;
    return {
        ...descriptor,
        value(e: Event) {
            const inputRef = e.target as HTMLInputElement;
            console.log(`Input value in method ${key} of ${target.constructor.name} equal to ${inputRef.value}`)
            originalValue.call(this, e);
        }
    }
}

export function Debounce(ms: number) {
    let timeId: number | null;
    return (_target: any, _key: string, descriptor: PropertyDescriptor): PropertyDescriptor => {
        const originalValue = descriptor.value;
        return {
            ...descriptor,
            value(...args: any[]) {
                if (timeId) {
                    clearTimeout(timeId);
                }
                timeId = window.setTimeout(() => {
                    originalValue.call(this, ...args);
                }, ms)
            }
        }
    }
}

export function SavePersitence(target: any, key: string) {
    const localKey = `${target.constructor.name}_${key}`;
    const getter = () => {
        return localStorage.getItem(localKey);
    }

    const setter = (newValue: string) => {
        localStorage.setItem(localKey, newValue)
    }

    Object.defineProperty(target, key, {
        get: getter,
        set: setter,
        enumerable: true,
        configurable: true
    })
}

export function CheckTypeInRuntime
    (target: any, key: string) {
    const { name: type } = Reflect.getMetadata('design:type', target, key);
    let value: any;

    Object.defineProperty(target, key, {
        get() {
            return value;
        },
        set(newValue) {
            const realType = typeof newValue;
            const actualType = type.toLowerCase();
            if (realType !== actualType) {
                throw new Error(`type of ${key} is not ${actualType}. You tried to set ${realType}`);
            }
            value = newValue;
        },
        enumerable: true,
        configurable: true
    })
}

const RANGE_KEY = 'design:RANGE_KEY';

export function Range(min: number, max: number) {
    return (target: any, key: string, index: number) => {
        const existingRange = Reflect.getMetadata('design:type', target, key) ?? {};
        existingRange[index] = [min, max];
        Reflect.defineMetadata(RANGE_KEY, existingRange, target, key);
    }
}

export function Validate(target: any, key: string, descriptor: PropertyDescriptor): void {
    const originalValue = descriptor.value;
    descriptor.value = function (...args: any[]) {
        const existingRange = Reflect.getMetadata('design:type', target, key) ?? {};
        for (const [paramIndex, range] of Object.entries(existingRange)) {
            const [min, max] = range as [number, number];
            const paramValue = Number(args[Number(paramIndex)]);
            if (paramValue < min || paramValue > max) {
                throw new Error(`Error in ${target.constructor.name} instance.
                Parameter of method ${key} on position ${Number(paramIndex) + 1} out of range [${[min, max]}].
                Current value ${paramValue}
                `);
            }
        }
        return originalValue.call(this, ...args);
    }
}