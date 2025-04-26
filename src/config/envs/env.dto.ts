import { IsNumber, IsString } from 'class-validator';
import { Type } from 'class-transformer';

export class EnvVars {
    @Type(() => Number)
    @IsNumber()
    PORT: number;

    @IsString()
    DATABASE_MONGO_URL: string;

    @IsString()
    BULL_MQ: string;

    @Type(() => Number)
    BULL_MQ_PORT: number;

    @IsString()
    DUMMY_JSON_URL: string;
}
