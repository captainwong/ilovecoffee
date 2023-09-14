import { Test, TestingModule } from '@nestjs/testing';
import { CoffeesService } from './coffees.service';
import { DataSource } from 'typeorm';
import { getRepositoryToken } from '@nestjs/typeorm';
import { Flavor } from './entities/flavor.entity';
import { Coffee } from './entities/coffee.entity';

describe('CoffeesService', () => {
  let service: CoffeesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        CoffeesService,
        { provide: DataSource, useValue: {} }, // mock
        { provide: getRepositoryToken(Flavor), useValue: {} }, // mock
        { provide: getRepositoryToken(Coffee), useValue: {} }, // mock
      ],
    }).compile();

    service = module.get<CoffeesService>(CoffeesService);
    // service = module.resolve<CoffeesService>(CoffeesService); // if CoffeesService is TRANSIENT
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
