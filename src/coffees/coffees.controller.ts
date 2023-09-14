import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode, HttpStatus,
  Param,
  Patch,
  Post,
  Query,
  SetMetadata,
  UsePipes,
  ValidationPipe
} from '@nestjs/common';
import { CoffeesService } from './coffees.service';
import { CreateCoffeeDto, UpdateCoffeeDto } from './dto';
import { PaginationQueryDto } from '../common';
import { Public } from 'src/common/decorators/public.decorator';
import { ParseIntPipe } from 'src/common/pipes/parse-int.pipe';


// @UsePipes(ValidationPipe) // apply the validation pipe to all routes in this controller
@Controller('coffees')
export class CoffeesController {
  constructor(private readonly coffeesService: CoffeesService) {

  }

  @Public()
  @UsePipes(ValidationPipe) // apply the validation pipe to this route only
  @Get()
  async findAll(@Query() paginationQuery : PaginationQueryDto) {
    await new Promise(resolve => setTimeout(resolve, 5000));
    return this.coffeesService.findAll(paginationQuery);
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    console.log(id);
    return this.coffeesService.findOne(id);
  }

  @Post()
  create(@Body() createCoffeeDto : CreateCoffeeDto) {
    return this.coffeesService.create(createCoffeeDto);
  }

  @Patch(':id')
  // @Body(ValidationPipe) // apply the validation pipe to Body only
  update(@Param('id') id: number, @Body(ValidationPipe) updateCoffeeDto: UpdateCoffeeDto) {
    return this.coffeesService.update(id, updateCoffeeDto);
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.coffeesService.remove(id);
  }
}
