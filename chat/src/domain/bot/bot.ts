import { BusinessError, DomainAggregate, IdValue } from "../common";

export enum ChatBotTypeEnum {
    ChatGpt = 'chat-gpt' 
}

export class ChatBotId extends IdValue {
    
}


export class ChatBotType {

    constructor(private value: ChatBotTypeEnum) {
        if (!this.value) {
            throw new ChatBotTypeWrong();
        }
        if (!Object.values(ChatBotTypeEnum).includes(this.value)) {
            throw new ChatBotTypeWrong();
        }
    }

    public toType(): ChatBotTypeEnum {
        return this.value;
    }

}

export class ChatBot  extends DomainAggregate<ChatBotId> {

    constructor(id: ChatBotId, private type: ChatBotType) {
        super(id);
    }

    public getType(): ChatBotType {
        return this.type;
    }
}

class ChatBotTypeWrong extends BusinessError {
    constructor() {
        super('Chat bot type is wrong');
    }
}