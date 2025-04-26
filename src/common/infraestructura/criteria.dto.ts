import { IsArray, IsNumber, IsOptional, IsString, Max } from 'class-validator';
import { Transform, Type } from 'class-transformer';
import { Criteria } from '../domain/criteria';


export class CriteriaDto implements Criteria {
    @IsOptional()
    @IsNumber()
    @Type(() => Number)
    readonly start: number = 0;

    @IsOptional()
    @IsNumber()
    @Max(10000)
    @Type(() => Number)
    readonly size: number = 10;
}
