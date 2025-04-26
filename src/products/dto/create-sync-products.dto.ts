import { IsArray, IsInt, ArrayNotEmpty, Min } from 'class-validator';

export class CreateSyncProductsDto {
    @IsArray()
    @ArrayNotEmpty()
    @IsInt({ each: true })
    @Min(1, { each: true })
    readonly productIds: number[];
}
