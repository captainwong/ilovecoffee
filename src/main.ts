import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { HttpExceptionFilter } from './common/filters/http-exception/http-exception.filter';
import { ApiKeyGuard } from './common/guards/api-key/api-key.guard';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe({
    whitelist: true, // remove properties that are not in the DTO
    forbidNonWhitelisted: true, // throw an error if properties that are not in the DTO are present
    transform: true, // transform the incoming data to the DTO type
    transformOptions: {
      enableImplicitConversion: true, // convert incoming data to the DTO type even if it is not the same type
    },
  }));
  app.useGlobalFilters(new HttpExceptionFilter());
  app.useGlobalGuards(new ApiKeyGuard());
  await app.listen(3000);
}
bootstrap(); 

