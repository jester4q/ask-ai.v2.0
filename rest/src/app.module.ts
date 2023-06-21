import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
// import { AiModelModule } from './ai-model/aiModel.module';
// import { ChatModule } from './chat/chat.module';

import dbConfig from "./config/db.config";

@Module({
    imports: [
        TypeOrmModule.forRoot(dbConfig()),
        // ChatModule,
        // AiModelModule
    ]
})
export class AppModule {

}