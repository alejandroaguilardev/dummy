import { ErrorDomain } from "../../common/domain/error-domain";
import { DummyJsonProductResponse } from "../domain/response/dummy-json.response";

export class DummyJsonFetch {
    static async getProduct(productId: number) {
        const response = await fetch(`${process.env.DUMMY_JSON_URL}/${productId}`);
        if (!response.ok) {
            throw new ErrorDomain(`Failed to fetch Dummy Fetch`, 400, response.statusText);
        }
        return await response.json() as DummyJsonProductResponse;
    }
}