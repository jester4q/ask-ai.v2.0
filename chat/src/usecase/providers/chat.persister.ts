import { Chat } from "domain/chat/chat";

export interface IChatPersister {
    save(chat: Chat): void;
}