import { Body, Controller, Post } from '@nestjs/common';
import { ProductsQueueService } from './services/products-queue.service';
import { CreateSyncProductsDto } from './infraestructura/dto/create-sync-products.dto';
import { SyncProductsDocs } from './infraestructura/docs/sync-products.docs';
import { ProductsService } from './services/products.service';

@Controller()
export class ProductsController {
  constructor(
    private readonly productsQueueService: ProductsQueueService,
  ) { }


  @Post('sync/products')
  @SyncProductsDocs()
  async syncProducts(@Body() createSyncProductsDto: CreateSyncProductsDto) {
    return this.productsQueueService.syncProducts(createSyncProductsDto);
  }
}
