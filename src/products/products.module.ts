import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { EventEmitterModule } from '@nestjs/event-emitter';
import { BullModule } from '@nestjs/bullmq';
import { BullBoardModule } from '@bull-board/nestjs';
import { BullMQAdapter } from "@bull-board/api/bullMQAdapter";
import { ProductsQueueService } from './services/products-queue.service';
import { ProductsController } from './products.controller';
import { Product, ProductSchema } from './infraestructura/entities/products.entity';
import { PRODUCTS_QUEUE } from './domain/queues/product.queues';
import { MongooseProductRepository } from './infraestructura/repositories/mongoose-product.repository';
import { ProductsService } from './services/products.service';
import { ProductSyncProcessor } from './queues/product-sync.processor';
import { HttpModule } from '@nestjs/axios';
import { DummyAxios } from './infraestructura/dummy/dummy.axios';

@Module({
  imports: [
    EventEmitterModule.forRoot(),
    MongooseModule.forFeature([{ name: Product.name, schema: ProductSchema }]),
    BullModule.registerQueue({
      name: PRODUCTS_QUEUE.sync,
    }),
    BullBoardModule.forFeature({
      name: PRODUCTS_QUEUE.sync,
      adapter: BullMQAdapter,
    }),
    HttpModule.register({
      timeout: 3000,
      maxRedirects: 3,
    }),
  ],
  controllers: [ProductsController],
  providers: [
    MongooseProductRepository,
    ProductsQueueService,
    ProductsService,
    ProductSyncProcessor,
    DummyAxios
  ],
})
export class ProductsModule { }
