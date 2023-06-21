import { MysqlConnectionOptions } from "typeorm/driver/mysql/MysqlConnectionOptions";
import { TDBConfig } from "./types";

let conf: MysqlConnectionOptions;


export default (): MysqlConnectionOptions  => {
    if (!conf) {
        const DB_ACCESS: TDBConfig = JSON.parse(process.env.DB_ACCESS);
        conf = {
            ...DB_ACCESS,
            host: "localhost", 
            port: 3306,
            entities: [`${__dirname}/**/*.entity{.ts,.js}`],
            synchronize: true,
            type: 'mysql'
        };
    }
    return conf;
};
