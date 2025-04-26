import { DummyJsonProductResponse } from "./dummy-json.response";

export class DummyJsonFetch {
    static async getProduct(productId: number) {
        const response = await fetch(`${process.env.DUMMY_JSON_URL}/${productId}`);
        if (!response.ok) {
            throw new Error(`Failed to fetch product: ${response.statusText}`);
        }
        return await response.json() as DummyJsonProductResponse;
    }
}