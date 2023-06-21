export class IdValue {

    constructor (private value: number) {
    }

    public toNumber(): number {
        return this.value;
    }

    public equal(id: IdValue): boolean {
        return this.toNumber() === id.toNumber();
    }

    public [Symbol.toPrimitive](hint: string): number | string | boolean {

        if (hint === "number") {
            return this.value;
        }
        if (hint === "string") {
            return this.value.toString();
        }
        return this.value > 0;

    }
}