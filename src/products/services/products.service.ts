import { Injectable } from '@nestjs/common';
import { DummyJsonProductResponse } from '../domain/response/dummy-json.response';
import { ProductStatus } from '../domain/product-status';
import { MongooseProductRepository } from '../infraestructura/repositories/mongoose-product.repository';
import { Criteria } from 'src/common/domain/criteria';


@Injectable()
export class ProductsService {
    constructor(private readonly mongooseProductRepository: MongooseProductRepository) { }

    async saveAndUpdateProduct(data: DummyJsonProductResponse, status: ProductStatus) {
        return this.mongooseProductRepository.saveAndUpdateProduct(data, status);
    }

    async updateStatus(productId: number, status: ProductStatus.FAILED, errorData: any) {
        return this.mongooseProductRepository.updateStatus(productId, status, errorData);
    }

    async findProducts(criteria: Criteria) {
        return this.mongooseProductRepository.findProducts(criteria);
    }
    async findProductById(productId: number) {
        return this.mongooseProductRepository.findProductById(productId);
    }
    async findProductByIdOnlyStatus(productId: number) {
        return this.mongooseProductRepository.findProductByIdOnlyStatus(productId);
    }


}
