import { Test, TestingModule } from '@nestjs/testing';
import { Queue } from 'bullmq';
import { ProductsQueueService } from '../../../src/products/services/products-queue.service';
import { CreateSyncProductsDto } from '../../../src/products/infraestructura/dto/create-sync-products.dto';
import { PRODUCTS_QUEUE } from '../../../src/products/domain/queues/product.queues';
import { IdentifierMother } from '../domain/identifier.mother';

type MockQueue = {
    add: jest.Mock;
};

jest.mock('bullmq');

describe('ProductsQueueService', () => {
    let productsQueueService: ProductsQueueService;
    let mockSyncQueue: MockQueue;

    beforeEach(async () => {
        mockSyncQueue = {
            add: jest.fn(),
        };

        const moduleFixture: TestingModule = await Test.createTestingModule({
            providers: [
                ProductsQueueService,
                {
                    provide: Queue,
                    useValue: mockSyncQueue
                },
                {
                    provide: `BullQueue_${PRODUCTS_QUEUE.sync}`,
                    useValue: mockSyncQueue,
                },
            ],
        }).compile();

        productsQueueService = moduleFixture.get<ProductsQueueService>(ProductsQueueService);
    });

    it('should add jobs to the queue ', async () => {
        const productIds = IdentifierMother.generateArrayRandom();
        const createSyncJobDto: CreateSyncProductsDto = { productIds };
        await productsQueueService.syncProducts(createSyncJobDto);

        expect(mockSyncQueue.add).toHaveBeenCalledTimes(productIds.length);
    });

    it('should add jobs to the queue and return success message', async () => {
        const productIds = IdentifierMother.generateArrayRandom();
        const createSyncJobDto: CreateSyncProductsDto = { productIds };

        const response = await productsQueueService.syncProducts(createSyncJobDto);

        expect(response.message).toBe(ProductsQueueService.message);
    });

    it('should failed jobs', async () => {
        const productIds = IdentifierMother.generateArrayRandom();
        const createSyncJobDto: CreateSyncProductsDto = { productIds };

        mockSyncQueue.add.mockReturnValue(new Error('Queue error'));
        const response = await productsQueueService.syncProducts(createSyncJobDto);
        console.log(response)

    });

});
