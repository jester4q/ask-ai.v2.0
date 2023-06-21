import { Chat, ChatId } from "domain/chat/chat";
import { ChatUserId } from "domain/user/user";

export interface IChatExtractor {
    getById(orderId: ChatId): Promise<Chat | undefined>;

    getLastChat(forUser: ChatUserId): Promise<Chat | undefined>;

    getAll(userId: ChatUserId, limit?: number): Promise<Chat[]>
}