import { Processor } from '@nestjs/bullmq';
import { Job } from 'bullmq';
import { DummyJsonFetch } from '../infraestructura/dummy-json-fetch';

@Processor('product-sync-queue')
export class ProductSyncProcessor {

    async handleProductSync(job: Job) {
        const { productId } = job.data;

        try {
            const data = await DummyJsonFetch.getProduct(productId);
            console.log(data)
            // TODO product saveAndUpdate
        } catch (error) {
            throw error;
        }
    }
}
