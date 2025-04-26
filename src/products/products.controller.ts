import { Body, Controller, Get, Param, ParseIntPipe, Post } from '@nestjs/common';
import { ProductsQueueService } from './services/products-queue.service';
import { CreateSyncProductsDto } from './infraestructura/dto/create-sync-products.dto';
import { SyncProductsDocs } from './infraestructura/docs/sync-products.docs';
import { ProductsService } from './services/products.service';

@Controller()
export class ProductsController {
  constructor(
    private readonly productsQueueService: ProductsQueueService,
    private readonly productService: ProductsService,
  ) { }


  @Post('sync/products')
  @SyncProductsDocs()
  async syncProducts(@Body() createSyncProductsDto: CreateSyncProductsDto) {
    return this.productsQueueService.syncProducts(createSyncProductsDto);
  }

  @Get('/products/:productId')
  async findProductById(@Param('productId', ParseIntPipe) productId: number) {
    return this.productService.findProductById(productId);
  }
}
