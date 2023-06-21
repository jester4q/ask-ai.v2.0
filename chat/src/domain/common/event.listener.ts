import { DomainEvent } from "./event";

export interface DomainEventListener<T extends DomainEvent> {

    eventType(): T;

    handle(event: T): void;
}