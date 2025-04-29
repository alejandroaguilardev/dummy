import { Processor, WorkerHost } from '@nestjs/bullmq';
import { EventEmitter2 } from '@nestjs/event-emitter';
import { Job } from 'bullmq';
import { ProductsService } from '../services/products.service';
import { ProductStatus } from '../domain/product-status';
import { ProductCreatedEvent } from '../domain/product-created-event';
import { DummyAxios } from '../infraestructura/dummy/dummy.axios';

@Processor('product-sync-queue')
export class ProductSyncProcessor extends WorkerHost {
    constructor(
        private readonly productService: ProductsService,
        private readonly apiProducts: DummyAxios,
        private readonly eventEmitter: EventEmitter2,
    ) {
        super()
    }
    async process(job: Job) {
        const { productId } = job.data;

        try {
            const data = await this.apiProducts.getProduct(productId);
            await this.productService.saveAndUpdateProduct(data, ProductStatus.COMPLETED);
            this.eventEmitter.emit('product.created', new ProductCreatedEvent(productId));
        } catch (error) {
            if (job.attemptsMade >= 2) {
                await this.productService.updateStatus(productId, ProductStatus.FAILED, error.response?.data || error.message);
            }
            throw error;
        }
    }
}
