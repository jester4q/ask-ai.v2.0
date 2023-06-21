require('dotenv').config();

import { ValidationPipe } from "@nestjs/common";
import { NestFactory } from "@nestjs/core";
import { DocumentBuilder } from "@nestjs/swagger";
import { SwaggerModule } from "@nestjs/swagger/dist";
import { AppModule } from "./app.module";

import restConfig from "./config/app.config";

async function bootstrap() {
    const conf = restConfig();
    const app = await NestFactory.create(AppModule,  { cors: true });
    app.useGlobalPipes(new ValidationPipe());
    const config = new DocumentBuilder()
        .setTitle('Chat: REST API')
        .setDescription('')
        .setVersion('1.01')
        .build();
    const document = SwaggerModule.createDocument(app, config);
    SwaggerModule.setup('api', app, document);
    await app.listen(conf.port, () => console.log('Server started on port ' + conf.port));

}

bootstrap();