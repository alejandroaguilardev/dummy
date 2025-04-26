import { applyDecorators } from '@nestjs/common';
import { ApiOkResponse, ApiOperation, ApiQuery } from '@nestjs/swagger';

export function ProductsDocs() {
    return applyDecorators(
        ApiOperation({
            summary: 'List products',
            description: 'Retrieve a paginated list of products.',
        }),
        ApiQuery({
            name: 'page',
            required: false,
            description: 'Page number to retrieve (starts from 1).',
            type: Number,
            example: 1,
        }),
        ApiQuery({
            name: 'limit',
            required: false,
            description: 'Number of products per page.',
            type: Number,
            example: 10,
        }),
        ApiOkResponse({
            description: 'Products successfully retrieved.',
        }),
        ApiOkResponse({
            content: {
                'application/json': {
                    schema: {
                        type: 'object',
                    },
                    example: {
                        "rows": [
                            {
                                "_id": "680cf519cf6114439dde6ba7",
                                "productId": 42,
                                "__v": 0,
                                "category": "groceries",
                                "description": "Pure and refreshing bottled water, essential for staying hydrated throughout the day.",
                                "externalApiResponse": {
                                    "id": 42,
                                    "title": "Water",
                                    "description": "Pure and refreshing bottled water, essential for staying hydrated throughout the day.",
                                    "category": "groceries",
                                    "price": 0.99,
                                    "discountPercentage": 13.71,
                                    "rating": 2.93,
                                    "stock": 95,
                                    "tags": [
                                        "beverages"
                                    ],
                                    "sku": "LZG5PPHA",
                                    "weight": 2,
                                    "dimensions": {
                                        "width": 25.46,
                                        "height": 25.86,
                                        "depth": 18.06
                                    },
                                    "warrantyInformation": "No warranty",
                                    "shippingInformation": "Ships in 1 week",
                                    "availabilityStatus": "In Stock",
                                    "reviews": [
                                        {
                                            "rating": 4,
                                            "comment": "Highly recommended!",
                                            "date": "2024-05-23T08:56:21.621Z",
                                            "reviewerName": "Lillian Simmons",
                                            "reviewerEmail": "lillian.simmons@x.dummyjson.com"
                                        },
                                        {
                                            "rating": 4,
                                            "comment": "Great product!",
                                            "date": "2024-05-23T08:56:21.621Z",
                                            "reviewerName": "Emily Brown",
                                            "reviewerEmail": "emily.brown@x.dummyjson.com"
                                        },
                                        {
                                            "rating": 5,
                                            "comment": "Great value for money!",
                                            "date": "2024-05-23T08:56:21.621Z",
                                            "reviewerName": "Cameron Perez",
                                            "reviewerEmail": "cameron.perez@x.dummyjson.com"
                                        }
                                    ],
                                    "returnPolicy": "7 days return policy",
                                    "minimumOrderQuantity": 46,
                                    "meta": {
                                        "createdAt": "2024-05-23T08:56:21.621Z",
                                        "updatedAt": "2024-05-23T08:56:21.621Z",
                                        "barcode": "7625896901250",
                                        "qrCode": "https://assets.dummyjson.com/public/qr-code.png"
                                    },
                                    "images": [
                                        "https://cdn.dummyjson.com/products/images/groceries/Water/1.png"
                                    ],
                                    "thumbnail": "https://cdn.dummyjson.com/products/images/groceries/Water/thumbnail.png"
                                },
                                "lastSyncedAt": "2025-04-26T15:01:31.213Z",
                                "price": 0.99,
                                "status": "completed",
                                "thumbnail": "https://cdn.dummyjson.com/products/images/groceries/Water/thumbnail.png",
                                "title": "Water"
                            },
                            {
                                "_id": "680cf52bcf6114439dde6ba8",
                                "productId": 43,
                                "__v": 0,
                                "category": "home-decoration",
                                "description": "The Decoration Swing is a charming addition to your home decor. Crafted with intricate details, it adds a touch of elegance and whimsy to any room.",
                                "externalApiResponse": {
                                    "id": 43,
                                    "title": "Decoration Swing",
                                    "description": "The Decoration Swing is a charming addition to your home decor. Crafted with intricate details, it adds a touch of elegance and whimsy to any room.",
                                    "category": "home-decoration",
                                    "price": 59.99,
                                    "discountPercentage": 0.65,
                                    "rating": 3.56,
                                    "stock": 62,
                                    "tags": [
                                        "home decor",
                                        "swing"
                                    ],
                                    "sku": "MBEK52ST",
                                    "weight": 8,
                                    "dimensions": {
                                        "width": 20.75,
                                        "height": 11.18,
                                        "depth": 7.92
                                    },
                                    "warrantyInformation": "Lifetime warranty",
                                    "shippingInformation": "Ships in 2 weeks",
                                    "availabilityStatus": "In Stock",
                                    "reviews": [
                                        {
                                            "rating": 5,
                                            "comment": "Highly recommended!",
                                            "date": "2024-05-23T08:56:21.621Z",
                                            "reviewerName": "Aria Roberts",
                                            "reviewerEmail": "aria.roberts@x.dummyjson.com"
                                        },
                                        {
                                            "rating": 5,
                                            "comment": "Highly impressed!",
                                            "date": "2024-05-23T08:56:21.621Z",
                                            "reviewerName": "Caleb Perkins",
                                            "reviewerEmail": "caleb.perkins@x.dummyjson.com"
                                        },
                                        {
                                            "rating": 5,
                                            "comment": "Great product!",
                                            "date": "2024-05-23T08:56:21.621Z",
                                            "reviewerName": "Aria Roberts",
                                            "reviewerEmail": "aria.roberts@x.dummyjson.com"
                                        }
                                    ],
                                    "returnPolicy": "30 days return policy",
                                    "minimumOrderQuantity": 2,
                                    "meta": {
                                        "createdAt": "2024-05-23T08:56:21.621Z",
                                        "updatedAt": "2024-05-23T08:56:21.621Z",
                                        "barcode": "6434699988216",
                                        "qrCode": "https://assets.dummyjson.com/public/qr-code.png"
                                    },
                                    "images": [
                                        "https://cdn.dummyjson.com/products/images/home-decoration/Decoration%20Swing/1.png",
                                        "https://cdn.dummyjson.com/products/images/home-decoration/Decoration%20Swing/2.png",
                                        "https://cdn.dummyjson.com/products/images/home-decoration/Decoration%20Swing/3.png"
                                    ],
                                    "thumbnail": "https://cdn.dummyjson.com/products/images/home-decoration/Decoration%20Swing/thumbnail.png"
                                },
                                "lastSyncedAt": "2025-04-26T15:07:59.435Z",
                                "price": 59.99,
                                "status": "completed",
                                "thumbnail": "https://cdn.dummyjson.com/products/images/home-decoration/Decoration%20Swing/thumbnail.png",
                                "title": "Decoration Swing"
                            },
                            {
                                "_id": "680cf52bcf6114439dde6baa",
                                "productId": 40,
                                "__v": 0,
                                "category": "groceries",
                                "description": "Sweet and succulent strawberries, great for snacking, desserts, or blending into smoothies.",
                                "externalApiResponse": {
                                    "id": 40,
                                    "title": "Strawberry",
                                    "description": "Sweet and succulent strawberries, great for snacking, desserts, or blending into smoothies.",
                                    "category": "groceries",
                                    "price": 3.99,
                                    "discountPercentage": 19.59,
                                    "rating": 4.5,
                                    "stock": 9,
                                    "tags": [
                                        "fruits"
                                    ],
                                    "sku": "LPP7I4JZ",
                                    "weight": 4,
                                    "dimensions": {
                                        "width": 20.82,
                                        "height": 15.81,
                                        "depth": 14.89
                                    },
                                    "warrantyInformation": "1 year warranty",
                                    "shippingInformation": "Ships in 1 week",
                                    "availabilityStatus": "In Stock",
                                    "reviews": [
                                        {
                                            "rating": 5,
                                            "comment": "Highly recommended!",
                                            "date": "2024-05-23T08:56:21.621Z",
                                            "reviewerName": "Charlotte Lopez",
                                            "reviewerEmail": "charlotte.lopez@x.dummyjson.com"
                                        },
                                        {
                                            "rating": 5,
                                            "comment": "Great product!",
                                            "date": "2024-05-23T08:56:21.621Z",
                                            "reviewerName": "Grace Green",
                                            "reviewerEmail": "grace.green@x.dummyjson.com"
                                        },
                                        {
                                            "rating": 1,
                                            "comment": "Disappointing product!",
                                            "date": "2024-05-23T08:56:21.621Z",
                                            "reviewerName": "Logan Torres",
                                            "reviewerEmail": "logan.torres@x.dummyjson.com"
                                        }
                                    ],
                                    "returnPolicy": "30 days return policy",
                                    "minimumOrderQuantity": 38,
                                    "meta": {
                                        "createdAt": "2024-05-23T08:56:21.621Z",
                                        "updatedAt": "2024-05-23T08:56:21.621Z",
                                        "barcode": "7936749779940",
                                        "qrCode": "https://assets.dummyjson.com/public/qr-code.png"
                                    },
                                    "images": [
                                        "https://cdn.dummyjson.com/products/images/groceries/Strawberry/1.png"
                                    ],
                                    "thumbnail": "https://cdn.dummyjson.com/products/images/groceries/Strawberry/thumbnail.png"
                                },
                                "lastSyncedAt": "2025-04-26T15:00:59.163Z",
                                "price": 3.99,
                                "status": "completed",
                                "thumbnail": "https://cdn.dummyjson.com/products/images/groceries/Strawberry/thumbnail.png",
                                "title": "Strawberry"
                            },
                            {
                                "_id": "680cf52bcf6114439dde6bab",
                                "productId": 80,
                                "__v": 0,
                                "category": "laptops",
                                "description": "The Huawei Matebook X Pro is a slim and stylish laptop with a high-resolution touchscreen display, offering a premium experience for users on the go.",
                                "externalApiResponse": {
                                    "id": 80,
                                    "title": "Huawei Matebook X Pro",
                                    "description": "The Huawei Matebook X Pro is a slim and stylish laptop with a high-resolution touchscreen display, offering a premium experience for users on the go.",
                                    "category": "laptops",
                                    "price": 1399.99,
                                    "discountPercentage": 15.25,
                                    "rating": 4.62,
                                    "stock": 34,
                                    "tags": [
                                        "laptops"
                                    ],
                                    "brand": "Huawei",
                                    "sku": "U2CBNNB0",
                                    "weight": 9,
                                    "dimensions": {
                                        "width": 22.11,
                                        "height": 11.11,
                                        "depth": 23.07
                                    },
                                    "warrantyInformation": "2 year warranty",
                                    "shippingInformation": "Ships in 2 weeks",
                                    "availabilityStatus": "In Stock",
                                    "reviews": [
                                        {
                                            "rating": 4,
                                            "comment": "Great value for money!",
                                            "date": "2024-05-23T08:56:21.622Z",
                                            "reviewerName": "Samantha Howard",
                                            "reviewerEmail": "samantha.howard@x.dummyjson.com"
                                        },
                                        {
                                            "rating": 2,
                                            "comment": "Would not buy again!",
                                            "date": "2024-05-23T08:56:21.622Z",
                                            "reviewerName": "Daniel Cook",
                                            "reviewerEmail": "daniel.cook@x.dummyjson.com"
                                        },
                                        {
                                            "rating": 5,
                                            "comment": "Very satisfied!",
                                            "date": "2024-05-23T08:56:21.622Z",
                                            "reviewerName": "Brayden Fleming",
                                            "reviewerEmail": "brayden.fleming@x.dummyjson.com"
                                        }
                                    ],
                                    "returnPolicy": "60 days return policy",
                                    "minimumOrderQuantity": 1,
                                    "meta": {
                                        "createdAt": "2024-05-23T08:56:21.622Z",
                                        "updatedAt": "2024-05-23T08:56:21.622Z",
                                        "barcode": "1232723732298",
                                        "qrCode": "https://assets.dummyjson.com/public/qr-code.png"
                                    },
                                    "images": [
                                        "https://cdn.dummyjson.com/products/images/laptops/Huawei%20Matebook%20X%20Pro/1.png",
                                        "https://cdn.dummyjson.com/products/images/laptops/Huawei%20Matebook%20X%20Pro/2.png",
                                        "https://cdn.dummyjson.com/products/images/laptops/Huawei%20Matebook%20X%20Pro/3.png"
                                    ],
                                    "thumbnail": "https://cdn.dummyjson.com/products/images/laptops/Huawei%20Matebook%20X%20Pro/thumbnail.png"
                                },
                                "lastSyncedAt": "2025-04-26T15:00:59.294Z",
                                "price": 1399.99,
                                "status": "completed",
                                "thumbnail": "https://cdn.dummyjson.com/products/images/laptops/Huawei%20Matebook%20X%20Pro/thumbnail.png",
                                "title": "Huawei Matebook X Pro"
                            },
                            {
                                "_id": "680cf52bcf6114439dde6bac",
                                "productId": 48,
                                "__v": 0,
                                "category": "kitchen-accessories",
                                "description": "The Bamboo Spatula is a versatile kitchen tool made from eco-friendly bamboo. Ideal for flipping, stirring, and serving various dishes.",
                                "externalApiResponse": {
                                    "id": 48,
                                    "title": "Bamboo Spatula",
                                    "description": "The Bamboo Spatula is a versatile kitchen tool made from eco-friendly bamboo. Ideal for flipping, stirring, and serving various dishes.",
                                    "category": "kitchen-accessories",
                                    "price": 7.99,
                                    "discountPercentage": 4.85,
                                    "rating": 4.4,
                                    "stock": 0,
                                    "tags": [
                                        "kitchen tools",
                                        "utensils"
                                    ],
                                    "sku": "MYIWU1I6",
                                    "weight": 4,
                                    "dimensions": {
                                        "width": 27.97,
                                        "height": 21.77,
                                        "depth": 21.38
                                    },
                                    "warrantyInformation": "1 year warranty",
                                    "shippingInformation": "Ships in 1 month",
                                    "availabilityStatus": "Out of Stock",
                                    "reviews": [
                                        {
                                            "rating": 4,
                                            "comment": "Very happy with my purchase!",
                                            "date": "2024-05-23T08:56:21.621Z",
                                            "reviewerName": "Olivia Anderson",
                                            "reviewerEmail": "olivia.anderson@x.dummyjson.com"
                                        },
                                        {
                                            "rating": 5,
                                            "comment": "Fast shipping!",
                                            "date": "2024-05-23T08:56:21.621Z",
                                            "reviewerName": "Grayson Coleman",
                                            "reviewerEmail": "grayson.coleman@x.dummyjson.com"
                                        },
                                        {
                                            "rating": 4,
                                            "comment": "Great product!",
                                            "date": "2024-05-23T08:56:21.621Z",
                                            "reviewerName": "Mia Miller",
                                            "reviewerEmail": "mia.miller@x.dummyjson.com"
                                        }
                                    ],
                                    "returnPolicy": "7 days return policy",
                                    "minimumOrderQuantity": 26,
                                    "meta": {
                                        "createdAt": "2024-05-23T08:56:21.621Z",
                                        "updatedAt": "2024-05-23T08:56:21.621Z",
                                        "barcode": "4736572105219",
                                        "qrCode": "https://assets.dummyjson.com/public/qr-code.png"
                                    },
                                    "images": [
                                        "https://cdn.dummyjson.com/products/images/kitchen-accessories/Bamboo%20Spatula/1.png"
                                    ],
                                    "thumbnail": "https://cdn.dummyjson.com/products/images/kitchen-accessories/Bamboo%20Spatula/thumbnail.png"
                                },
                                "lastSyncedAt": "2025-04-26T15:07:59.573Z",
                                "price": 7.99,
                                "status": "completed",
                                "thumbnail": "https://cdn.dummyjson.com/products/images/kitchen-accessories/Bamboo%20Spatula/thumbnail.png",
                                "title": "Bamboo Spatula"
                            },
                            {
                                "_id": "680cf52bcf6114439dde6bad",
                                "productId": 6,
                                "__v": 0,
                                "category": "fragrances",
                                "description": "CK One by Calvin Klein is a classic unisex fragrance, known for its fresh and clean scent. It's a versatile fragrance suitable for everyday wear.",
                                "externalApiResponse": {
                                    "id": 6,
                                    "title": "Calvin Klein CK One",
                                    "description": "CK One by Calvin Klein is a classic unisex fragrance, known for its fresh and clean scent. It's a versatile fragrance suitable for everyday wear.",
                                    "category": "fragrances",
                                    "price": 49.99,
                                    "discountPercentage": 0.32,
                                    "rating": 4.85,
                                    "stock": 17,
                                    "tags": [
                                        "fragrances",
                                        "perfumes"
                                    ],
                                    "brand": "Calvin Klein",
                                    "sku": "DZM2JQZE",
                                    "weight": 5,
                                    "dimensions": {
                                        "width": 11.53,
                                        "height": 14.44,
                                        "depth": 6.81
                                    },
                                    "warrantyInformation": "5 year warranty",
                                    "shippingInformation": "Ships overnight",
                                    "availabilityStatus": "In Stock",
                                    "reviews": [
                                        {
                                            "rating": 5,
                                            "comment": "Great value for money!",
                                            "date": "2024-05-23T08:56:21.619Z",
                                            "reviewerName": "Sophia Brown",
                                            "reviewerEmail": "sophia.brown@x.dummyjson.com"
                                        },
                                        {
                                            "rating": 3,
                                            "comment": "Very disappointed!",
                                            "date": "2024-05-23T08:56:21.619Z",
                                            "reviewerName": "Madison Collins",
                                            "reviewerEmail": "madison.collins@x.dummyjson.com"
                                        },
                                        {
                                            "rating": 1,
                                            "comment": "Poor quality!",
                                            "date": "2024-05-23T08:56:21.619Z",
                                            "reviewerName": "Maya Reed",
                                            "reviewerEmail": "maya.reed@x.dummyjson.com"
                                        }
                                    ],
                                    "returnPolicy": "No return policy",
                                    "minimumOrderQuantity": 20,
                                    "meta": {
                                        "createdAt": "2024-05-23T08:56:21.619Z",
                                        "updatedAt": "2024-05-23T08:56:21.619Z",
                                        "barcode": "2210136215089",
                                        "qrCode": "https://assets.dummyjson.com/public/qr-code.png"
                                    },
                                    "images": [
                                        "https://cdn.dummyjson.com/products/images/fragrances/Calvin%20Klein%20CK%20One/1.png",
                                        "https://cdn.dummyjson.com/products/images/fragrances/Calvin%20Klein%20CK%20One/2.png",
                                        "https://cdn.dummyjson.com/products/images/fragrances/Calvin%20Klein%20CK%20One/3.png"
                                    ],
                                    "thumbnail": "https://cdn.dummyjson.com/products/images/fragrances/Calvin%20Klein%20CK%20One/thumbnail.png"
                                },
                                "lastSyncedAt": "2025-04-26T15:00:59.574Z",
                                "price": 49.99,
                                "status": "completed",
                                "thumbnail": "https://cdn.dummyjson.com/products/images/fragrances/Calvin%20Klein%20CK%20One/thumbnail.png",
                                "title": "Calvin Klein CK One"
                            },
                            {
                                "_id": "680cf52bcf6114439dde6bae",
                                "productId": 45,
                                "__v": 0,
                                "category": "home-decoration",
                                "description": "The House Showpiece Plant is an artificial plant that brings a touch of nature to your home without the need for maintenance. It adds greenery and style to any space.",
                                "externalApiResponse": {
                                    "id": 45,
                                    "title": "House Showpiece Plant",
                                    "description": "The House Showpiece Plant is an artificial plant that brings a touch of nature to your home without the need for maintenance. It adds greenery and style to any space.",
                                    "category": "home-decoration",
                                    "price": 39.99,
                                    "discountPercentage": 19.45,
                                    "rating": 3.61,
                                    "stock": 89,
                                    "tags": [
                                        "home decor",
                                        "artificial plants"
                                    ],
                                    "sku": "LLNHNIFU",
                                    "weight": 9,
                                    "dimensions": {
                                        "width": 27.15,
                                        "height": 14.43,
                                        "depth": 10.05
                                    },
                                    "warrantyInformation": "5 year warranty",
                                    "shippingInformation": "Ships in 1 week",
                                    "availabilityStatus": "In Stock",
                                    "reviews": [
                                        {
                                            "rating": 5,
                                            "comment": "Great value for money!",
                                            "date": "2024-05-23T08:56:21.621Z",
                                            "reviewerName": "Olivia Anderson",
                                            "reviewerEmail": "olivia.anderson@x.dummyjson.com"
                                        },
                                        {
                                            "rating": 2,
                                            "comment": "Very unhappy with my purchase!",
                                            "date": "2024-05-23T08:56:21.621Z",
                                            "reviewerName": "Grace Perry",
                                            "reviewerEmail": "grace.perry@x.dummyjson.com"
                                        },
                                        {
                                            "rating": 5,
                                            "comment": "Highly recommended!",
                                            "date": "2024-05-23T08:56:21.621Z",
                                            "reviewerName": "Emma Wilson",
                                            "reviewerEmail": "emma.wilson@x.dummyjson.com"
                                        }
                                    ],
                                    "returnPolicy": "7 days return policy",
                                    "minimumOrderQuantity": 7,
                                    "meta": {
                                        "createdAt": "2024-05-23T08:56:21.621Z",
                                        "updatedAt": "2024-05-23T08:56:21.621Z",
                                        "barcode": "1895440764997",
                                        "qrCode": "https://assets.dummyjson.com/public/qr-code.png"
                                    },
                                    "images": [
                                        "https://cdn.dummyjson.com/products/images/home-decoration/House%20Showpiece%20Plant/1.png",
                                        "https://cdn.dummyjson.com/products/images/home-decoration/House%20Showpiece%20Plant/2.png",
                                        "https://cdn.dummyjson.com/products/images/home-decoration/House%20Showpiece%20Plant/3.png"
                                    ],
                                    "thumbnail": "https://cdn.dummyjson.com/products/images/home-decoration/House%20Showpiece%20Plant/thumbnail.png"
                                },
                                "lastSyncedAt": "2025-04-26T16:34:35.885Z",
                                "price": 39.99,
                                "status": "completed",
                                "thumbnail": "https://cdn.dummyjson.com/products/images/home-decoration/House%20Showpiece%20Plant/thumbnail.png",
                                "title": "House Showpiece Plant"
                            },
                            {
                                "_id": "680cf52bcf6114439dde6baf",
                                "productId": 17,
                                "__v": 0,
                                "category": "groceries",
                                "description": "High-quality beef steak, great for grilling or cooking to your preferred level of doneness.",
                                "externalApiResponse": {
                                    "id": 17,
                                    "title": "Beef Steak",
                                    "description": "High-quality beef steak, great for grilling or cooking to your preferred level of doneness.",
                                    "category": "groceries",
                                    "price": 12.99,
                                    "discountPercentage": 17.99,
                                    "rating": 2.83,
                                    "stock": 96,
                                    "tags": [
                                        "meat"
                                    ],
                                    "sku": "BWWA2MSO",
                                    "weight": 9,
                                    "dimensions": {
                                        "width": 23.35,
                                        "height": 13.48,
                                        "depth": 26.4
                                    },
                                    "warrantyInformation": "1 month warranty",
                                    "shippingInformation": "Ships overnight",
                                    "availabilityStatus": "In Stock",
                                    "reviews": [
                                        {
                                            "rating": 4,
                                            "comment": "Very pleased!",
                                            "date": "2024-05-23T08:56:21.620Z",
                                            "reviewerName": "Ethan Martinez",
                                            "reviewerEmail": "ethan.martinez@x.dummyjson.com"
                                        },
                                        {
                                            "rating": 3,
                                            "comment": "Disappointing product!",
                                            "date": "2024-05-23T08:56:21.620Z",
                                            "reviewerName": "Owen Fisher",
                                            "reviewerEmail": "owen.fisher@x.dummyjson.com"
                                        },
                                        {
                                            "rating": 4,
                                            "comment": "Very happy with my purchase!",
                                            "date": "2024-05-23T08:56:21.620Z",
                                            "reviewerName": "Scarlett Wright",
                                            "reviewerEmail": "scarlett.wright@x.dummyjson.com"
                                        }
                                    ],
                                    "returnPolicy": "90 days return policy",
                                    "minimumOrderQuantity": 21,
                                    "meta": {
                                        "createdAt": "2024-05-23T08:56:21.620Z",
                                        "updatedAt": "2024-05-23T08:56:21.620Z",
                                        "barcode": "8335515097879",
                                        "qrCode": "https://assets.dummyjson.com/public/qr-code.png"
                                    },
                                    "images": [
                                        "https://cdn.dummyjson.com/products/images/groceries/Beef%20Steak/1.png"
                                    ],
                                    "thumbnail": "https://cdn.dummyjson.com/products/images/groceries/Beef%20Steak/thumbnail.png"
                                },
                                "lastSyncedAt": "2025-04-26T15:00:59.841Z",
                                "price": 12.99,
                                "status": "completed",
                                "thumbnail": "https://cdn.dummyjson.com/products/images/groceries/Beef%20Steak/thumbnail.png",
                                "title": "Beef Steak"
                            },
                            {
                                "_id": "680cf52bcf6114439dde6bb0",
                                "productId": 57,
                                "__v": 0,
                                "category": "kitchen-accessories",
                                "description": "The Fine Mesh Strainer is a versatile tool for straining liquids and sifting dry ingredients. Its fine mesh ensures efficient filtering for smooth cooking and baking.",
                                "externalApiResponse": {
                                    "id": 57,
                                    "title": "Fine Mesh Strainer",
                                    "description": "The Fine Mesh Strainer is a versatile tool for straining liquids and sifting dry ingredients. Its fine mesh ensures efficient filtering for smooth cooking and baking.",
                                    "category": "kitchen-accessories",
                                    "price": 9.99,
                                    "discountPercentage": 2.56,
                                    "rating": 3.7,
                                    "stock": 13,
                                    "tags": [
                                        "kitchen tools",
                                        "strainers"
                                    ],
                                    "sku": "4XB2EHHJ",
                                    "weight": 6,
                                    "dimensions": {
                                        "width": 5.19,
                                        "height": 9.64,
                                        "depth": 20.53
                                    },
                                    "warrantyInformation": "1 week warranty",
                                    "shippingInformation": "Ships in 2 weeks",
                                    "availabilityStatus": "In Stock",
                                    "reviews": [
                                        {
                                            "rating": 4,
                                            "comment": "Would buy again!",
                                            "date": "2024-05-23T08:56:21.621Z",
                                            "reviewerName": "Jack Ward",
                                            "reviewerEmail": "jack.ward@x.dummyjson.com"
                                        },
                                        {
                                            "rating": 5,
                                            "comment": "Fast shipping!",
                                            "date": "2024-05-23T08:56:21.621Z",
                                            "reviewerName": "John Doe",
                                            "reviewerEmail": "john.doe@x.dummyjson.com"
                                        },
                                        {
                                            "rating": 5,
                                            "comment": "Excellent quality!",
                                            "date": "2024-05-23T08:56:21.621Z",
                                            "reviewerName": "Liam Smith",
                                            "reviewerEmail": "liam.smith@x.dummyjson.com"
                                        }
                                    ],
                                    "returnPolicy": "90 days return policy",
                                    "minimumOrderQuantity": 32,
                                    "meta": {
                                        "createdAt": "2024-05-23T08:56:21.621Z",
                                        "updatedAt": "2024-05-23T08:56:21.621Z",
                                        "barcode": "0913686095458",
                                        "qrCode": "https://assets.dummyjson.com/public/qr-code.png"
                                    },
                                    "images": [
                                        "https://cdn.dummyjson.com/products/images/kitchen-accessories/Fine%20Mesh%20Strainer/1.png"
                                    ],
                                    "thumbnail": "https://cdn.dummyjson.com/products/images/kitchen-accessories/Fine%20Mesh%20Strainer/thumbnail.png"
                                },
                                "lastSyncedAt": "2025-04-26T16:35:07.159Z",
                                "price": 9.99,
                                "status": "completed",
                                "thumbnail": "https://cdn.dummyjson.com/products/images/kitchen-accessories/Fine%20Mesh%20Strainer/thumbnail.png",
                                "title": "Fine Mesh Strainer"
                            },
                            {
                                "_id": "680cf575cf6114439dde6bb1",
                                "productId": 69,
                                "__v": 0,
                                "category": "kitchen-accessories",
                                "description": "The Plate is a classic and essential dishware item for serving meals. Its durable and stylish design makes it suitable for everyday use or special occasions.",
                                "externalApiResponse": {
                                    "id": 69,
                                    "title": "Plate",
                                    "description": "The Plate is a classic and essential dishware item for serving meals. Its durable and stylish design makes it suitable for everyday use or special occasions.",
                                    "category": "kitchen-accessories",
                                    "price": 3.99,
                                    "discountPercentage": 13.03,
                                    "rating": 3.07,
                                    "stock": 30,
                                    "tags": [
                                        "dinnerware",
                                        "plates"
                                    ],
                                    "sku": "S8T5CGBD",
                                    "weight": 8,
                                    "dimensions": {
                                        "width": 14.77,
                                        "height": 21.78,
                                        "depth": 29.1
                                    },
                                    "warrantyInformation": "1 year warranty",
                                    "shippingInformation": "Ships overnight",
                                    "availabilityStatus": "In Stock",
                                    "reviews": [
                                        {
                                            "rating": 3,
                                            "comment": "Poor quality!",
                                            "date": "2024-05-23T08:56:21.622Z",
                                            "reviewerName": "Gavin Stanley",
                                            "reviewerEmail": "gavin.stanley@x.dummyjson.com"
                                        },
                                        {
                                            "rating": 5,
                                            "comment": "Great value for money!",
                                            "date": "2024-05-23T08:56:21.622Z",
                                            "reviewerName": "Mateo Bennett",
                                            "reviewerEmail": "mateo.bennett@x.dummyjson.com"
                                        },
                                        {
                                            "rating": 1,
                                            "comment": "Very disappointed!",
                                            "date": "2024-05-23T08:56:21.622Z",
                                            "reviewerName": "Elena Long",
                                            "reviewerEmail": "elena.long@x.dummyjson.com"
                                        }
                                    ],
                                    "returnPolicy": "7 days return policy",
                                    "minimumOrderQuantity": 2,
                                    "meta": {
                                        "createdAt": "2024-05-23T08:56:21.622Z",
                                        "updatedAt": "2024-05-23T08:56:21.622Z",
                                        "barcode": "5500686082076",
                                        "qrCode": "https://assets.dummyjson.com/public/qr-code.png"
                                    },
                                    "images": [
                                        "https://cdn.dummyjson.com/products/images/kitchen-accessories/Plate/1.png"
                                    ],
                                    "thumbnail": "https://cdn.dummyjson.com/products/images/kitchen-accessories/Plate/thumbnail.png"
                                },
                                "lastSyncedAt": "2025-04-26T15:02:55.947Z",
                                "price": 3.99,
                                "status": "completed",
                                "thumbnail": "https://cdn.dummyjson.com/products/images/kitchen-accessories/Plate/thumbnail.png",
                                "title": "Plate"
                            }
                        ],
                        "total": 78,
                        "page": 1,
                        "pageSize": 10,
                        "totalPages": 8,
                        "hasNextPage": true,
                        "hasPreviousPage": false
                    }
                },
            },
        }),
    );
}
