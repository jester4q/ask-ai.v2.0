import { Chat } from "domain/chat/chat";
import { IChatExtractor } from "./chat.extractor";

export interface IChatRepository extends IChatExtractor {   
    save(chat: Chat): void;
}