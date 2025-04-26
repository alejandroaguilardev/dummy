import { ProductStatus } from "./product-status";
import { DummyJsonProductResponse } from "./response/dummy-json.response";

export interface ProductRepository {
    saveAndUpdateProduct(data: DummyJsonProductResponse, status: ProductStatus): Promise<void>;
    updateStatus(productId: number, status: ProductStatus.FAILED, errorData: any): Promise<void>;
}