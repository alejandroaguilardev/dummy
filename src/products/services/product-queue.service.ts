import { InjectQueue } from '@nestjs/bullmq';
import { Injectable } from '@nestjs/common';
import { Queue } from 'bullmq';
import { CreateSyncProductsDto } from '../dto/create-sync-products.dto';
import { PRODUCTS_QUEUE } from '../queues/bull.config';


@Injectable()
export class ProductsService {
    constructor(
        @InjectQueue(PRODUCTS_QUEUE.sync) private readonly syncQueue: Queue,
    ) { }

    public static message = "Product sync jobs queued successfully";
    public static error = "Sync job failed for one or more products";

    async syncProducts(createSyncJobDto: CreateSyncProductsDto) {
        const { productIds } = createSyncJobDto;

        const promises = productIds.map(productId =>
            this.syncQueue.add('sync', { productId }, {
                attempts: 3,
                backoff: {
                    type: 'exponential',
                    delay: 1000,
                },
            })
        );
        try {
            await Promise.all(promises);
            return { message: ProductsService.message };
        } catch (error) {
            throw new Error(ProductsService.error);
        }
    }
}
