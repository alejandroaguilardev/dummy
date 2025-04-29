import { DummyJsonFetch } from "../../../src/products/infraestructura/dummy/dummy-json-fetch";
import { IdentifierMother } from "../domain/identifier.mother";

describe('DummyJson', () => {

    it('should return a defined product', async () => {
        const productId = IdentifierMother.generateRandom();
        const result = await DummyJsonFetch.getProduct(productId);
        expect(result).toBeDefined();
    });

    it('should return a product with correct ID', async () => {
        const productId = IdentifierMother.generateRandom();
        const result = await DummyJsonFetch.getProduct(productId);
        expect(result.id).toBe(productId);
    });

    it('should return a product with a title', async () => {
        const productId = IdentifierMother.generateRandom();
        const result = await DummyJsonFetch.getProduct(productId);
        expect(result.title).toBeDefined();
    });
});
