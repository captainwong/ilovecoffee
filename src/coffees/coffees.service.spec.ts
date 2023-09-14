import { Test, TestingModule } from '@nestjs/testing';
import { CoffeesService } from './coffees.service';

describe('CoffeesService', () => {
  let service: CoffeesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CoffeesService],
    }).compile();

    service = module.get<CoffeesService>(CoffeesService);
    // service = module.resolve<CoffeesService>(CoffeesService); // if CoffeesService is TRANSIENT
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
