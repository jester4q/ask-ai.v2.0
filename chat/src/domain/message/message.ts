import { BusinessError, DateValue, IdValue, StringValue } from "../common";

export class ChatMessageId extends IdValue {}

export class ChatMessageText extends StringValue {

    constructor(value: string) {
        super(value);
        if (this.isBlank()) {
            throw new ChatMessageEmpty();
        }
    }
}

export class ChatMessageDateTime extends DateValue {}

export class ChatMessage {
    private readonly id: ChatMessageId;
    

    constructor(private text: ChatMessageText, private dateTime: ChatMessageDateTime) {
        this.id = new ChatMessageId(dateTime.toNumber());
    }

    public getId(): ChatMessageId {
        return this.id;
    }
    
    public getText(): ChatMessageText {
        return this.text;
    }

    public getDateTime(): ChatMessageDateTime {
        return this.dateTime;
    }
    
}


class ChatMessageEmpty extends BusinessError {

    constructor() {
        super('Culd not create message with empty text');
    }
}

