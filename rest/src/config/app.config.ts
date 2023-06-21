import { TAppConfig } from "./types";

let conf: TAppConfig;

export default (): TAppConfig => {
    if (!conf) {
        conf = {
            port: parseInt(process.env.APP_PORT) || 5000,
        };
    }
    return conf;
};
