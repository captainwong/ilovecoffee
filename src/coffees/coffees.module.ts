import { Module } from '@nestjs/common';
import { CoffeesController } from './coffees.controller';
import { CoffeesService } from './coffees.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Coffee, Flavor } from './entities';
import { Event } from 'src/events/entities';
import { ConfigModule } from '@nestjs/config';


@Module({
  imports: [TypeOrmModule.forFeature([Coffee, Flavor, Event]), ConfigModule], 
  controllers: [CoffeesController],
  providers: [CoffeesService]
})
export class CoffeesModule { }
