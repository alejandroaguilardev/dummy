import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { BullModule } from '@nestjs/bullmq';
import { BullBoardModule } from '@bull-board/nestjs';
import { BullMQAdapter } from "@bull-board/api/bullMQAdapter";
import { ProductsService } from './services/product-queue.service';
import { ProductsController } from './products.controller';
import { Product, ProductSchema } from './entities/products.entity';
import { PRODUCTS_QUEUE } from './queues/bull.config';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Product.name, schema: ProductSchema }]),
    BullModule.registerQueue({
      name: PRODUCTS_QUEUE.sync,
    }),
    BullBoardModule.forFeature({
      name: PRODUCTS_QUEUE.sync,
      adapter: BullMQAdapter,
    }),
  ],
  controllers: [ProductsController],
  providers: [ProductsService],
})
export class ProductsModule { }
