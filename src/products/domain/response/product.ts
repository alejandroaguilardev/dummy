import { ProductStatus } from '../../domain/product-status';
import { DummyJsonProductResponse } from '../../domain/response/dummy-json.response';

export interface Product {
    productId: number;
    title?: string;
    description?: string;
    price?: number;
    category?: string;
    thumbnail?: string;
    lastSyncedAt?: Date | null;
    status?: ProductStatus;
    externalApiResponse?: DummyJsonProductResponse;
}
