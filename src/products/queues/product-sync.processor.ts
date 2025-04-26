import { Processor, WorkerHost } from '@nestjs/bullmq';
import { Job } from 'bullmq';
import { DummyJsonFetch } from '../infraestructura/dummy-json-fetch';
import { ProductsService } from '../services/products.service';
import { ProductStatus } from '../domain/product-status';

@Processor('product-sync-queue')
export class ProductSyncProcessor extends WorkerHost {
    constructor(private readonly productService: ProductsService) {
        super()
    }
    async process(job: Job) {
        const { productId } = job.data;

        try {
            const data = await DummyJsonFetch.getProduct(productId);
            await this.productService.saveAndUpdateProduct(data, ProductStatus.COMPLETED);
        } catch (error) {
            if (job.attemptsMade >= 2) {
                await this.productService.updateStatus(productId, ProductStatus.FAILED, error.response?.data || error.message);
            }
            throw error;
        }
    }
}
