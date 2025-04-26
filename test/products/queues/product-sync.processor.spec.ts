import { Test, TestingModule } from '@nestjs/testing';
import * as request from 'supertest';
import { INestApplication } from '@nestjs/common';
import { EventEmitter2 } from '@nestjs/event-emitter';
import { IdentifierMother } from '../domain/identifier.mother';
import { AppModule } from '../../../src/app.module';

describe('ProductSyncProcessor', () => {
    let app: INestApplication;
    let eventEmitter: EventEmitter2;

    beforeEach(async () => {
        const moduleFixture: TestingModule = await Test.createTestingModule({
            imports: [AppModule],
        }).compile();

        app = moduleFixture.createNestApplication();
        await app.init();
        eventEmitter = app.get(EventEmitter2);
    });

    it('Process', async () => {
        const productIds = IdentifierMother.generateArrayRandom();

        const waitForSpecificProductCreated = new Promise<void>((resolve) => {
            eventEmitter.on('product.created', (event) => {
                if (event.productId === productIds[0]) {
                    resolve();
                }
            });
        });

        await request(app.getHttpServer())
            .post('/sync/products')
            .send({ productIds });

        await waitForSpecificProductCreated;

        const response = await request(app.getHttpServer())
            .get(`/products/${productIds[0]}`)
            .expect(200);

        expect(response.body.productId).toBe(productIds[0]);

    });
});
