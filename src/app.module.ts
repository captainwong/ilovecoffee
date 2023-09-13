import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CoffeesModule } from './coffees/coffees.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import * as Joi from 'joi';

@Module({
  imports: [
    // will load and parse .env file, merge key/value pairs from .env file to process.env object,
    // thus make it available to the entire application
    ConfigModule.forRoot({
      envFilePath: '.env', // default value is .env, but we can change it to other file name
      ignoreEnvFile: false, // default value is false, but we can change it to true
      validationSchema: Joi.object({
        DATABASE_HOST: Joi.required(),
        DATABASE_PORT: Joi.number().default(5432),
      }),
    }),
    CoffeesModule,
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DATABASE_HOST, // value from .env file
      port: +process.env.DATABASE_PORT, // convert string to number
      username: process.env.DATABASE_USER,
      password: process.env.DATABASE_PASSWORD,
      database: process.env.DATABASE_NAME,
      autoLoadEntities: true, // should not be used in production - it will load all entities at once
      synchronize: true, // should not be used in production - it will drop the database
    })],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }

