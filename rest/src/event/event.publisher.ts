import {DomainEventPublisher, DomainEventListener, DomainEvent} from '@bot-chat/chat';
import { Logger } from '../log/logger';


class EventPublisher implements DomainEventPublisher {


    private logger = new Logger('events');
    private listenerMap = new Map<string, DomainEventListener<DomainEvent>[]>;

    public registerListener(listener: DomainEventListener<DomainEvent>) {
        let instance: any = listener.eventType().constructor;
        if (!this.listenerMap.has(instance.name)) {
            this.listenerMap.set(instance.name, [])
        }
        this.listenerMap.get(instance.name).push(listener);
    }

    public publish(events: DomainEvent[]) {
        events.forEach( e => {
            let instance: any = e.constructor;
            this.logger.log(`Processing event: ${instance.name}`);
            const listeners: DomainEventListener<DomainEvent>[] = this.listenerMap.has(instance.name) ? this.listenerMap.get(instance.name) : [];
            this.sendEvents(listeners, e)
        })
    }

    private sendEvents(listeners: DomainEventListener<DomainEvent>[], event: DomainEvent) {
        listeners.forEach(l =>  l.handle(event) )
    }
}