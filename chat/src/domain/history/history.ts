import { ChatMessage } from "../message";

export class ChatHistory {

    messages: Map<number, ChatMessage>;

    constructor() {
        this.messages = new Map();
    }

    public add(message: ChatMessage) {
        this.messages.set(message.getId().toNumber(), message);
        this.sortMessages();
    }

    public clear() {
        this.messages = new Map();
    }

    public getMessages(): ChatMessage[] {
        return [...this.messages.values()];
    }

    private sortMessages() {
        const result = [...this.messages].sort((a, b) => a[0] - b[0]);
        this.messages = new Map(result);
    }


}