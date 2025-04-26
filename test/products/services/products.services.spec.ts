import { Test, TestingModule } from '@nestjs/testing';
import { ProductsService } from '../../../src/products/services/products.service';
import { MongooseProductRepository } from '../../../src/products/infraestructura/repositories/mongoose-product.repository';
import { ProductStatus } from '../../../src/products/domain/product-status';
import { ProductMother } from '../domain/product.mother';
import { DummyResponseMother } from '../domain/dummy.mother';
import { IdentifierMother } from '../domain/identifier.mother';

describe('ProductsService', () => {
    let productsService: ProductsService;
    let mongooseProductRepository: MongooseProductRepository;

    beforeEach(async () => {
        const moduleFixture: TestingModule = await Test.createTestingModule({
            providers: [
                ProductsService,
                {
                    provide: MongooseProductRepository,
                    useValue: {
                        saveAndUpdateProduct: jest.fn(),
                        updateStatus: jest.fn(),
                    },
                },
            ],
        }).compile();

        productsService = moduleFixture.get<ProductsService>(ProductsService);
        mongooseProductRepository = moduleFixture.get<MongooseProductRepository>(MongooseProductRepository);
    });

    it('should saveAndUpdateProduct', async () => {
        const dummyProduct = DummyResponseMother.generateRandom();
        const product = ProductMother.generateWithDummyRandom(dummyProduct);
        const status = ProductStatus.COMPLETED;
        (mongooseProductRepository.saveAndUpdateProduct as jest.Mock).mockResolvedValue(product);

        await productsService.saveAndUpdateProduct(dummyProduct, status);

        expect(mongooseProductRepository.saveAndUpdateProduct).toHaveBeenCalledWith(dummyProduct, status);
    });

    it('should updateStatus ', async () => {
        const productId = IdentifierMother.generateRandom();
        const errorData = { message: 'Something went wrong' };
        (mongooseProductRepository.updateStatus as jest.Mock).mockResolvedValue(undefined);
        await productsService.updateStatus(productId, ProductStatus.FAILED, errorData);
        expect(mongooseProductRepository.updateStatus).toHaveBeenCalledWith(productId, ProductStatus.FAILED, errorData);
    });
});
