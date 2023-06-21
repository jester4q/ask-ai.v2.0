import { TOpenAiConfig } from "./types";

let conf: TOpenAiConfig;

export default (): TOpenAiConfig => {
    if (!conf) {
        conf = {
            apiKey: process.env.OPEN_AI_KEY || '',
        };
    }
    return conf;
};
