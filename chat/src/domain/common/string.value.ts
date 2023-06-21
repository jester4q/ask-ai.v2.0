export class StringValue {

    constructor (private value: string) {
    }

    public toString(): string {
        return this.value;
    }

    public isEmpty(): boolean {
        return !this.value || !this.value.length;
    }

    public isBlank(): boolean {
        return (this.isEmpty() || /^\s*$/.test(this.value));
    }
}