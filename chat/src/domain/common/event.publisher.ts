import { DomainEvent } from "./event";

export interface DomainEventPublisher {
    publish(events: DomainEvent[]): void;
}