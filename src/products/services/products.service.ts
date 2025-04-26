import { Injectable } from '@nestjs/common';
import { DummyJsonProductResponse } from '../domain/response/dummy-json.response';
import { ProductStatus } from '../domain/product-status';
import { MongooseProductRepository } from '../infraestructura/repositories/mongoose-product.repository';
import { CriteriaDto } from '../../common/infraestructura/criteria.dto';
import { Criteria } from '../../common/domain/criteria';


@Injectable()
export class ProductsService {
    constructor(private readonly mongooseProductRepository: MongooseProductRepository) { }

    async saveAndUpdateProduct(data: DummyJsonProductResponse, status: ProductStatus) {
        return this.mongooseProductRepository.saveAndUpdateProduct(data, status);
    }

    async updateStatus(productId: number, status: ProductStatus.FAILED, errorData: any) {
        return this.mongooseProductRepository.updateStatus(productId, status, errorData);
    }

    async findProducts(criteriaDto: CriteriaDto) {
        const { page, limit } = criteriaDto;
        const criteria = new Criteria(page, limit);
        return this.mongooseProductRepository.findProducts(criteria);
    }

    async findProductById(productId: number) {
        return this.mongooseProductRepository.findProductById(productId);
    }
    async findProductByIdOnlyStatus(productId: number) {
        return this.mongooseProductRepository.findProductByIdOnlyStatus(productId);
    }


}
