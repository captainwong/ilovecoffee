import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe({
    whitelist: true, // remove properties that are not in the DTO
    forbidNonWhitelisted: true, // throw an error if properties that are not in the DTO are present
    transform: true, // transform the incoming data to the DTO type
  }));
  await app.listen(3000);
}
bootstrap(); 

