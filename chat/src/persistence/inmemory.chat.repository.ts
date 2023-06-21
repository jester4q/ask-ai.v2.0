import { Chat, ChatId } from "domain/chat/chat"
import { DomainEventPublisher } from "domain/common/event.publisher";
import { ChatUserId } from "domain/user/user";
import { IChatRepository } from "usecase/providers/chat.repository";

export class InMemoryChatRepository implements IChatRepository {

    private readonly storage: Map<number, Chat>;

    constructor (private eventPublisher: DomainEventPublisher) {
        this.storage = new Map<number, Chat>();
    }

    public getById(chatId: ChatId): Promise<Chat | undefined> {
        let result;
        const key = +chatId;
        if (this.storage.has(key)) {
            result = this.storage.get(key);
            
        }

        return Promise.resolve(result);    
    }

    public getLastChat(forUser: ChatUserId): Promise<Chat | undefined> {
        let result;
        for (let chat of this.storage.values()) {
            if (chat.isCreator(forUser)) {
                result = chat;
            }
        }
        return Promise.resolve(result);    
    }

    getAll(forUser: ChatUserId, limit?: number): Promise<Chat[]> {
        const result = [];
        for (let chat of this.storage.values()) {
            if (chat.isCreator(forUser)) {
                result.push(chat);
            }
            if (limit && result.length >= limit) {
                break;
            }
        }
        return Promise.resolve(result);
    }

    save(chat: Chat) {
        this.eventPublisher.publish(chat.popEvents());
        this.storage.set(+chat.getId(), chat);
    }
}
