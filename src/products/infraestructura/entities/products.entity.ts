import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { DummyJsonProductResponse } from '../../domain/response/dummy-json.response';
import { ProductStatus } from '../../domain/product-status';

export type ProductDocument = Product & Document;


@Schema()
export class Product {
    @Prop({ required: true, unique: true })
    productId: number;

    @Prop()
    title: string;

    @Prop()
    description: string;

    @Prop()
    price: number;

    @Prop()
    category: string;

    @Prop()
    thumbnail: string;

    @Prop({ default: null })
    lastSyncedAt: Date;

    @Prop({ enum: ProductStatus, default: ProductStatus.PENDING })
    status: string;

    @Prop({ type: Object })
    externalApiResponse?: DummyJsonProductResponse;
}

export const ProductSchema = SchemaFactory.createForClass(Product);
