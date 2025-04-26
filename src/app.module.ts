import { Module } from '@nestjs/common';
import { APP_PIPE } from '@nestjs/core';
import { GlobalPipes } from './config/validation-pipes';
import { ConfigModule } from '@nestjs/config';
import { validateEnv } from './config/envs/env.validation';
import { MongooseModule } from '@nestjs/mongoose';
import { BullModule } from '@nestjs/bullmq';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      validate: validateEnv,
    }),
    MongooseModule.forRoot(process.env.DATABASE_MONGO_URL!),
    BullModule.forRoot({
      connection: {
        host: process.env.BULL_MQ,
        port: Number(process.env.BULL_MQ_PORT),
      },
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
