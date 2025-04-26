import { Product } from "./product";

export interface ProductsResponse {
    rows: Product[];
    total: number;
    page: number;
    pageSize: number;
    totalPages: number;
    hasNextPage: boolean;
    hasPreviousPage: boolean;
}
