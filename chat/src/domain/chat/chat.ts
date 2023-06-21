
import { IdValue, DomainAggregate, StringValue,  } from "../common";
import { ChatBot } from "../bot";
import { ChatHistory } from "../history";
import { ChatMessage, ChatMessageDateTime } from "../message";
import { ChatUser, ChatUserId } from "../user";


export class ChatId extends IdValue {}

export class ChatName extends StringValue {}

export class ChatQuery extends StringValue {}

export class ChatResponse extends StringValue {}

export class Chat extends DomainAggregate<ChatId> {

    private history: ChatHistory;
    

    constructor(id: ChatId, private name: ChatName, private user: ChatUser, private bot: ChatBot) {
        super(id);
        this.history = new ChatHistory();
    }

    public getId(): ChatId {
        return this.id;
    }

    public getName(): ChatName {
        return this.name;
    }

    public getBot(): ChatBot {
        return this.bot;
    }

    public isCreator(userId: ChatUserId): boolean {
        return this.user.equalById(userId);
    }

    public addQuery(txt: ChatQuery): void {
        this.history.add(new ChatMessage(txt, new ChatMessageDateTime()));
    }

    public addResponse(txt: ChatResponse): void {
        this.history.add(new ChatMessage(txt, new ChatMessageDateTime()));
    }

}