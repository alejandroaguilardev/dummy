import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { DummyJsonProductResponse } from '../infraestructura/dummy-json.response';

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

    @Prop({ enum: ['pending', 'completed', 'failed'], default: 'pending' })
    status: string;

    @Prop({ type: Object })
    externalApiResponse?: DummyJsonProductResponse;
}

export const ProductSchema = SchemaFactory.createForClass(Product);
