import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Criteria } from '../../../common/domain/criteria';
import { ProductRepository } from '../../domain/product.repository';
import { DummyJsonProductResponse } from '../../domain/response/dummy-json.response';
import { ProductStatus } from '../../domain/product-status';
import { Product as ProductEntity, ProductDocument } from '../entities/products.entity';
import { Product } from '../../domain/response/product';
import { MongooseCriteriaConvert } from './mongoose.criteria.convert';
import { ProductsResponse } from '../../domain/response/products.response';
import { ErrorDomain } from '../../../common/domain/error-domain';

@Injectable()
export class MongooseProductRepository implements ProductRepository {
    constructor(
        @InjectModel(ProductEntity.name) private readonly productModel: Model<ProductDocument>,
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

    async updateStatus(productId: number, status: ProductStatus.FAILED, errorData: any): Promise<void> {
        await this.productModel.findOneAndUpdate(
            { productId },
            {
                status,
                externalApiResponse: errorData,
                lastSyncedAt: new Date(),
            }
        );
    }

    async findProducts(criteria: Criteria): Promise<ProductsResponse> {
        const { start, size, page } = MongooseCriteriaConvert.convert(criteria);

        const [products, total] = await Promise.all([
            this.productModel.find()
                .skip(start)
                .limit(size)
                .exec(),
            this.productModel.countDocuments()
        ]);

        const totalPages = Math.ceil(total / size);

        return {
            rows: products as Product[],
            total,
            page,
            pageSize: size,
            totalPages,
            hasNextPage: page < totalPages,
            hasPreviousPage: page > 1,
        };
    }

    async findProductById(productId: number): Promise<Product> {
        const product = await this.productModel.findOne({ productId }).exec();
        if (!product) {
            throw new ErrorDomain('Product not found', 400, 'Id no valid');
        }
        return product as Product;
    }

    async findProductByIdOnlyStatus(productId: number): Promise<{ status: ProductStatus }> {
        const product = await this.productModel.findOne({ productId }).select('status').exec();
        if (!product) {
            throw new ErrorDomain('Product not found', 400, 'Id no valid');
        }
        return { status: product.status as ProductStatus };
    }
}
