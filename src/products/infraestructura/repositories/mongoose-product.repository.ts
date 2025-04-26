import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Product, ProductDocument } from '../entities/products.entity';
import { ProductRepository } from '../../domain/product.repository';
import { DummyJsonProductResponse } from '../../domain/response/dummy-json.response';
import { ProductStatus } from '../../domain/product-status';

@Injectable()
export class MongooseProductRepository implements ProductRepository {
    constructor(
        @InjectModel(Product.name) private readonly productModel: Model<ProductDocument>,
    ) { }

    async saveAndUpdateProduct(data: DummyJsonProductResponse, status: ProductStatus): Promise<void> {
        await this.productModel.findOneAndUpdate(
            { productId: data.id },
            {
                productId: data.id,
                title: data.title,
                description: data.description,
                price: data.price,
                category: data.category,
                thumbnail: data.thumbnail,
                lastSyncedAt: new Date(),
                status,
                externalApiResponse: data,
            },
            { upsert: true, new: true, setDefaultsOnInsert: true }
        );
    }

    async updateStatus(productId: number, status: ProductStatus.FAILED, errorData: any) {
        await this.productModel.findOneAndUpdate(
            { productId },
            {
                status,
                externalApiResponse: errorData,
                lastSyncedAt: new Date(),
            }
        );
    }
}
