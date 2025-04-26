import { applyDecorators } from '@nestjs/common';
import { ApiBadRequestResponse, ApiBody, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { CreateSyncProductsDto } from '../dto/create-sync-products.dto';
import { ProductsService } from '../services/product-queue.service';

export function SyncProductsDocs() {
    return applyDecorators(
        ApiOperation({
            summary: 'Add products to the sync queue',
            description: 'This endpoint accepts an array of product IDs and enqueues them for synchronization with an external API.',
        }),
        ApiBody({
            type: CreateSyncProductsDto,
            description: 'Request payload containing an array of product IDs to be added to the sync queue.',
            examples: {
                'Valid Request': {
                    value: {
                        productIds: [1, 2, 3],
                    },
                    description: 'A valid request with product IDs to sync.',
                },
            },
        }),
        ApiResponse({
            status: 200,
            description: 'Successfully added products to the sync queue.',
            content: {
                'application/json': {
                    schema: {
                        type: 'object',
                        properties: {
                            message: {
                                type: 'string',
                                example: ProductsService.message,
                            },
                        },
                    },
                    example: {
                        message: 'Product sync jobs queued successfully',
                    },
                },
            },
        }),
        ApiBadRequestResponse({
            description: 'Validation errors. The structure might change based on class-validator validation.',
            schema: {
                type: 'object',
                properties: {
                    statusCode: { type: 'number', example: 400 },
                    message: {
                        type: 'array',
                        items: { type: 'string' },
                        example: [
                            'productIds must be an array',
                            'productIds should not be empty',
                            'productIds must be an integer number',
                            'productIds must not be less than 1'
                        ],
                    },
                    error: { type: 'string', example: 'Bad Request' },
                },
            },
        })
    );
}
