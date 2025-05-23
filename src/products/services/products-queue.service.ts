import { InjectQueue } from '@nestjs/bullmq';
import { Injectable } from '@nestjs/common';
import { Queue } from 'bullmq';
import { CreateSyncProductsDto } from '../infraestructura/dto/create-sync-products.dto';
import { PRODUCTS_QUEUE } from '../domain/queues/product.queues';

@Injectable()
export class ProductsQueueService {
    constructor(
        @InjectQueue(PRODUCTS_QUEUE.sync) private readonly syncQueue: Queue,
    ) { }

    public static message = "Product sync jobs queued successfully";

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
        await Promise.all(promises);
        return { message: ProductsQueueService.message };
    }
}
