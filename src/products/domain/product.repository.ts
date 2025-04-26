import { Criteria } from "../../common/domain/criteria";
import { ProductStatus } from "./product-status";
import { DummyJsonProductResponse } from "./response/dummy-json.response";
import { Product } from "./response/product";
import { ProductsResponse } from "./response/products.response";

export interface ProductRepository {
    saveAndUpdateProduct(data: DummyJsonProductResponse, status: ProductStatus): Promise<void>;
    updateStatus(productId: number, status: ProductStatus.FAILED, errorData: any): Promise<void>;
    findProducts(criteria: Criteria): Promise<ProductsResponse>;
    findProductById(productId: number): Promise<Product>;
    findProductByIdOnlyStatus(productId: number): Promise<{ status: ProductStatus }>;
}