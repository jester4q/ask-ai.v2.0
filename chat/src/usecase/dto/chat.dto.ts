type ChatInfoDTO = {
    id: number;
    user: {
        id: number;
        name: string;
    }
    createdAt: string;
    title: string;
    bot: {
        id: number,
        model: string,
        type: string,
    }
    history: {
        question: string,
        answer: string
    }[]

}