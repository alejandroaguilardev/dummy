import { ApiProperty } from '@nestjs/swagger';
import { IsArray, IsInt, ArrayNotEmpty, Min } from 'class-validator';

export class CreateSyncProductsDto {

    @ApiProperty({ description: 'A valid request with product IDs to sync.' })
    @IsArray()
    @ArrayNotEmpty()
    @IsInt({ each: true })
    @Min(1, { each: true })
    readonly productIds: number[];
}
