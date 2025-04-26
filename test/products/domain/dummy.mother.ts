import { faker } from '@faker-js/faker';
import { IdentifierMother } from './identifier.mother';
import { DummyJsonProductResponse } from '../../../src/products/domain/response/dummy-json.response';

export class DummyResponseMother {
    static generateRandom() {
        return {
            id: IdentifierMother.generateRandom(),
            title: faker.commerce.productName(),
            description: faker.commerce.productDescription(),
            price: Number(faker.commerce.price()),
            category: faker.commerce.department(),
            thumbnail: faker.image.url(),
        } as DummyJsonProductResponse;
    }
}
