import { DummyJsonFetch } from "../../../src/products/infraestructura/dummy-json-fetch";
import { IdentifierMother } from "../domain/identifier.mother";

describe('DummyJson', () => {

    it('should_successfully_get_productId', async () => {
        const productId = IdentifierMother.generateRandom();
        const data = await DummyJsonFetch.getProduct(productId);

        expect(data.id).toBe(productId);
    });
});
