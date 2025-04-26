import { applyDecorators } from '@nestjs/common';
import { ApiOkResponse, ApiOperation, ApiParam } from '@nestjs/swagger';

export function ProductIdStatusDocs() {
    return applyDecorators(
        ApiOperation({
            summary: 'Get product by ID',
            description: 'Retrieve a product with its detailed information by product ID.',
        }),
        ApiParam({
            name: 'id',
            description: 'Product ID to retrieve',
            required: true,
            type: String,
        }),
        ApiOkResponse({
            description: 'Product successfully retrieved',
            content: {
                'application/json': {
                    schema: {
                        type: 'object',
                        properties: {
                            status: { type: 'string', description: "Status del producto" }
                        },
                    },
                    example: {
                        "status": "completed"
                    }
                }
            }
        })
    );
}
