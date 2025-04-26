import { Module } from '@nestjs/common';
import { APP_FILTER, APP_GUARD, APP_PIPE } from '@nestjs/core';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { BullModule } from '@nestjs/bullmq';
import { BullBoardModule } from "@bull-board/nestjs";
import { ExpressAdapter } from "@bull-board/express";
import { validateEnv } from './config/envs/env.validation';
import { GlobalPipes } from './config/validation-pipes';
import { ProductsModule } from './products/products.module';
import { GlobalExceptionFilter } from './config/global-error';
import { rateLimiting } from './config/rate-limiting';
import { ThrottlerGuard, ThrottlerModule } from '@nestjs/throttler';

@Module({
  imports: [
    ThrottlerModule.forRoot(rateLimiting),
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
    BullBoardModule.forRoot({
      route: '/queues',
      adapter: ExpressAdapter
    }),
    ProductsModule,
  ],
  providers: [
    {
      provide: APP_GUARD,
      useClass: ThrottlerGuard
    },
    {
      provide: APP_PIPE,
      useValue: GlobalPipes.getGlobal(),
    },
    {
      provide: APP_FILTER,
      useClass: GlobalExceptionFilter,
    },
  ],
})
export class AppModule { }
