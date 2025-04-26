import { Body, Controller, Post } from '@nestjs/common';
import { ProductsService } from './services/product-queue.service';
import { CreateSyncProductsDto } from './dto/create-sync-products.dto';
import { SyncProductsDocs } from './docs/sync-products.docs';

@Controller()
export class ProductsController {
  constructor(private readonly productsService: ProductsService) { }


  @Post('sync/products')
  @SyncProductsDocs()
  async syncProducts(@Body() createSyncProductsDto: CreateSyncProductsDto) {
    return this.productsService.syncProducts(createSyncProductsDto);
  }
}
