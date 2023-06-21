import { ChatBot } from "../bot";
import { Chat, ChatId, ChatName, ChatQuery } from "../chat";
import { BusinessError, IdValue, StringValue } from "../common";

export class ChatUserId extends IdValue {}


export class ChatUserName extends StringValue {

    constructor(value: string) {
        super(value);
        if (this.isBlank()) {
            throw new ChatUserNameEmpty();
        }
    }
}

export class ChatUser {
    
    private chat: Chat;

    constructor(private id: ChatUserId, private name: ChatUserName) {
    }

    public equalById(userId: ChatUserId): boolean {
        return this.id.equal(userId);
    }

    public getName(): ChatUserName {
        return this.name;
    }

    public getId(): ChatUserId {
        return this.id;
    }
   

    public openChat(name: ChatName, bot: ChatBot) {
        this.chat = new Chat(new ChatId(0), name, this, bot);
    }

    public ask(query: string) {
        if (!this.chat) {
            throw new ChatUserNoSelectedChat();
        }
        this.chat.addQuery(new ChatQuery(query));
    }

    public static create(name: string) {

        return new ChatUser(new ChatUserId(0), new ChatUserName(name));
    }
}

class ChatUserNameEmpty extends BusinessError {

    constructor() {
        super('Culd not create user with empty name');
    }
}

class ChatUserNoSelectedChat extends BusinessError {

    constructor() {
        super('Create chat first');
    }
}