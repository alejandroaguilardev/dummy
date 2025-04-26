import { Module } from '@nestjs/common';
import { APP_PIPE } from '@nestjs/core';
import { GlobalPipes } from './config/validation-pipes';
import { ConfigModule } from '@nestjs/config';
import { validateEnv } from './config/envs/env.validation';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      validate: validateEnv,
    }),
  ],
  providers: [
    {
      provide: APP_PIPE,
      useValue: GlobalPipes.getGlobal(),
    },
  ],
})
export class AppModule { }
