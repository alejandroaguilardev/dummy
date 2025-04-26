import { plainToInstance } from 'class-transformer';
import { validateSync } from 'class-validator';
import { EnvVars } from './env.dto';

export function validateEnv(config: Record<string, any>) {
    const validatedConfig = plainToInstance(EnvVars, config, {
        enableImplicitConversion: true,
    });

    const errors = validateSync(validatedConfig, {
        skipMissingProperties: false,
    });

    if (errors.length > 0) {
        throw new Error(`Config validation error ${errors.toString()}`);
    }

    return validatedConfig;
}
