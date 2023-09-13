import { Type } from "class-transformer";
import { IsOptional, IsPositive } from "class-validator";

export class PaginationQueryDto {

  /*
  with 
  
  new ValidationPipe({
    ..., // other options
    transformOptions: {
      enableImplicitConversion: true, // convert incoming data to the DTO type even if it is not the same type
    }
  })

  we don't need to use @Type(() => Number) decorator

  */

  @IsOptional()
  @IsPositive()
  // @Type(() => Number)
  limit : number;

  @IsOptional()
  @IsPositive()
  // @Type(() => Number)
  offset : number;
}
