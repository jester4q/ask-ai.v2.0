import { DomainEvent } from "./event";

export class DomainEntity<T> {

    private events: Array<DomainEvent>;
    
    constructor(protected id: T) {
        this.events = [];
    }

    public popEvents(): DomainEvent[] {
        const res = this.events;
        this.events = [];
        return res;
    }

    protected addEvent(event: DomainEvent) {
        this.events.push(event)
    }
    
}