import {v4 as uuidv4} from 'uuid';
import { DateValue } from './date.value';

export class DomainEvent {

    private id: EventId;
    private created: DateValue;


    protected constructor() {
        this.id = EventId.generate()
        this.created = new DateValue(new Date());
    }

    public getId(): EventId {
        return this.id;
    }

    public getCreatedDAte(): DateValue {
        return this.created;
    }
}

class EventId {
    constructor(private value: string) {
    }

    public getUid(): string {
        return this.value;
    }

    public static generate() {
        return new EventId(uuidv4())
    }
}
