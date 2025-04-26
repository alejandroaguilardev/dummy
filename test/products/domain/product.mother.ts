import { faker } from '@faker-js/faker';
import { Product } from '../../../src/products/infraestructura/entities/products.entity';
import { ProductStatus } from '../../../src/products/domain/product-status';
import { DummyJsonProductResponse } from '../../../src/products/domain/response/dummy-json.response';
import { DummyResponseMother } from './dummy.mother';

export class ProductMother {
    static generateRandom(): Product {
        const dummyResponse = DummyResponseMother.generateRandom();
        const product = new Product();
        product.productId = dummyResponse.id;
        product.title = dummyResponse.title;
        product.description = dummyResponse.description;
        product.price = dummyResponse.price;
        product.category = dummyResponse.category;
        product.thumbnail = dummyResponse.thumbnail;
        product.lastSyncedAt = faker.date.recent();
        product.status = ProductStatus.PENDING;
        product.externalApiResponse = dummyResponse as DummyJsonProductResponse;
        return product;
    }

    static generateWithDummyRandom(dummyResponse: DummyJsonProductResponse): Product {
        const product = new Product();
        product.productId = dummyResponse.id;
        product.title = dummyResponse.title;
        product.description = dummyResponse.description;
        product.price = dummyResponse.price;
        product.category = dummyResponse.category;
        product.thumbnail = dummyResponse.thumbnail;
        product.lastSyncedAt = faker.date.recent();
        product.status = ProductStatus.PENDING;
        product.externalApiResponse = dummyResponse as DummyJsonProductResponse;
        return product;
    }
}
