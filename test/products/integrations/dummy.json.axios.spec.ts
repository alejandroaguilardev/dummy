import { Test, TestingModule } from '@nestjs/testing';
import { HttpModule } from '@nestjs/axios';
import { DummyAxios } from '../../../src/products/infraestructura/dummy/dummy.axios';
import { MongooseProductRepository } from '../../../src/products/infraestructura/repositories/mongoose-product.repository';
import { IdentifierMother } from '../domain/identifier.mother';

describe('DummyAxios (Integration)', () => {
    let dummyAxios: DummyAxios;

    beforeEach(async () => {
        const moduleFixture: TestingModule = await Test.createTestingModule({
            imports: [HttpModule],
            providers: [
                DummyAxios,
                {
                    provide: MongooseProductRepository,
                    useValue: {
                        saveAndUpdateProduct: jest.fn(),
                        updateStatus: jest.fn(),
                    },
                },
            ],
        }).compile();

        dummyAxios = moduleFixture.get<DummyAxios>(DummyAxios);
    });

    it('should return a defined product', async () => {
        const productId = IdentifierMother.generateRandom();
        const result = await dummyAxios.getProduct(productId);
        expect(result).toBeDefined();
    });

    it('should return a product with correct ID', async () => {
        const productId = IdentifierMother.generateRandom();
        const result = await dummyAxios.getProduct(productId);
        expect(result.id).toBe(productId);
    });

    it('should return a product with a title', async () => {
        const productId = IdentifierMother.generateRandom();
        const result = await dummyAxios.getProduct(productId);
        expect(result.title).toBeDefined();
    });
});
