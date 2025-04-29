import { HttpService } from "@nestjs/axios";
import { Injectable } from "@nestjs/common";
import { DummyJsonProductResponse } from "../../domain/response/dummy-json.response";
import { catchError, firstValueFrom } from "rxjs";
import { AxiosError } from "axios";

@Injectable()
export class DummyAxios {
    private readonly url: string = process.env.DUMMY_JSON_URL!;

    constructor(
        private readonly httpService: HttpService
    ) { }

    async getProduct(productId: number): Promise<DummyJsonProductResponse> {
        const { data } = await firstValueFrom(this.httpService.get(`${this.url}/${productId}`).pipe(
            catchError((error: AxiosError) => {
                throw error
            })
        ));
        return data;
    }
}