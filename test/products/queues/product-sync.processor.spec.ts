import { Test, TestingModule } from '@nestjs/testing';
import * as request from 'supertest';
import { INestApplication } from '@nestjs/common';
import { IdentifierMother } from '../domain/identifier.mother';
import { AppModule } from '../../../src/app.module';

describe('ProductSyncProcessor', () => {
    let app: INestApplication;

    beforeEach(async () => {
        const moduleFixture: TestingModule = await Test.createTestingModule({
            imports: [AppModule],
        }).compile();

        app = moduleFixture.createNestApplication();
        await app.init();
    });

    it('Process', async () => {
        const productIds = IdentifierMother.generateArrayRandom();
        await request(app.getHttpServer())
            .post('/sync/products')
            .send({ productIds });
        // TODO wait for event :(
    });
});
