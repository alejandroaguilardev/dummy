import { Body, Controller, Post } from '@nestjs/common';
import { ProductsService } from './products.service';
import { CreateSyncProductsDto } from './dto/create-sync-products.dto';

@Controller('/')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) { }

  @Post('sync/products')
  syncProducts(@Body() createSyncProductsDto: CreateSyncProductsDto) {
    return true;
  }
}
