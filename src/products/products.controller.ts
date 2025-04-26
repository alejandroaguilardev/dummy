import { Body, Controller, Get, Param, ParseIntPipe, Post, Query } from '@nestjs/common';
import { ProductsQueueService } from './services/products-queue.service';
import { CreateSyncProductsDto } from './infraestructura/dto/create-sync-products.dto';
import { SyncProductsDocs } from './infraestructura/docs/sync-products.docs';
import { ProductsService } from './services/products.service';
import { CriteriaDto } from '../common/infraestructura/criteria.dto';
import { ProductsDocs } from './infraestructura/docs/products.docs';
import { ProductIdDocs } from './infraestructura/docs/product-id.docs';
import { ProductIdStatusDocs } from './infraestructura/docs/product-id-status.docs';

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

  @Get('/products')
  @ProductsDocs()
  async findProducts(@Query() criteria: CriteriaDto) {
    return this.productService.findProducts(criteria);
  }

  @Get('/products/:productId/status')
  @ProductIdStatusDocs()
  async findProductByIdOnlyStatus(@Param('productId', ParseIntPipe) productId: number) {
    return this.productService.findProductByIdOnlyStatus(productId);
  }

  @Get('/products/:productId')
  @ProductIdDocs()
  async findProductById(@Param('productId', ParseIntPipe) productId: number) {
    return this.productService.findProductById(productId);
  }
}
