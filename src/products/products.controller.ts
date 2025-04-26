import { Body, Controller, Post } from '@nestjs/common';
import { ProductsService } from './services/product-queue.service';
import { CreateSyncProductsDto } from './dto/create-sync-products.dto';

@Controller()
export class ProductsController {
  constructor(private readonly productsService: ProductsService) { }

  @Post('sync/products')
  async syncProducts(@Body() createSyncProductsDto: CreateSyncProductsDto) {
    return this.productsService.syncProducts(createSyncProductsDto);
  }
}
