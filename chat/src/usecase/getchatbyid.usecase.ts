import { Chat, ChatId } from "domain/chat/chat";
import { BusinessError } from "domain/common/business.error";

import { IChatExtractor } from "./providers/chat.extractor";

export class GetChatByIdUseCase {

    constructor(private chatExtractor: IChatExtractor) {

    }

    public async execute(id: ChatId): Promise<Chat> {
        const item = await this.chatExtractor.getById(id);
        if (!item) {
            throw new GetChatByIdUseCaseChatNotFound();
        }

        return item;
    }
}


class GetChatByIdUseCaseChatNotFound extends BusinessError {
    constructor() {
        super('Culd not find chat by id')
    }
}
