import { Module } from '@nestjs/common';
import { ProductsService } from './products.service';
import { ProductsController } from './products.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Product, ProductSchema } from './entities/products.entity';
import { BullProductSyncQueue } from './queues/bull.config';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Product.name, schema: ProductSchema }]),
    BullProductSyncQueue,
  ],
  controllers: [ProductsController],
  providers: [ProductsService],
})
export class ProductsModule { }
