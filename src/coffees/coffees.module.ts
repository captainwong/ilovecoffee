import { Injectable, Module, Scope } from '@nestjs/common';
import { CoffeesController } from './coffees.controller';
import { CoffeesService } from './coffees.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Coffee, Flavor } from './entities';
import { Event } from 'src/events/entities';
import { COFFEE_BRANDS } from './conffees.constants';
import { DataSource } from 'typeorm';

class ConfigService { }
class DevelopmentConfigService { }
class ProductionConfigService { }

@Injectable()
export class CoffeeBrandsFactory {
  create() {
    return ['buddy brew', 'nescafe'];
  }
}

@Module({
  imports: [TypeOrmModule.forFeature([Coffee, Flavor, Event])],
  controllers: [CoffeesController],
  providers: [
    CoffeesService,
    CoffeeBrandsFactory,
    {
      provide: COFFEE_BRANDS, // 👈
      useFactory: () => ['buddy brew', 'nescafe'],
      scope: Scope.TRANSIENT,

      // useValue: ['buddy brew', 'nescafe'], // 👈

      // useFactory: (brandsFactory: CoffeeBrandsFactory) => brandsFactory.create(),
      // inject: [CoffeeBrandsFactory],

      // useFactory: async (connection: DataSource): Promise<string[]> => {
      //   // const coffeeBrands = await connection.query('SELECT * ...');
      //   const coffeeBrands = await Promise.resolve(['buddy brew', 'nescafe']);
      //   console.log('[!] Async factory');
      //   return coffeeBrands;
      // },
      // inject: [DataSource],
    },
    {
      provide: ConfigService,
      useClass: process.env.NODE_ENV === 'development' ? DevelopmentConfigService : ProductionConfigService
    }
  ],
  exports: [CoffeesService]
})
export class CoffeesModule { }
