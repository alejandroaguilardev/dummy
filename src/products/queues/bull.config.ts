import { BullModule } from '@nestjs/bullmq';

export const BullProductSyncQueue = BullModule.registerQueue({
    name: 'product-sync-queue',
});
