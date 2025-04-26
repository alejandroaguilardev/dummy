import { Test, TestingModule } from '@nestjs/testing';
import * as request from 'supertest';
import { INestApplication } from '@nestjs/common';
import { IdentifierMother } from './domain/identifier.mother';
import { AppModule } from '../../src/app.module';
import { ProductsQueueService } from '../../src/products/services/products-queue.service';

describe('ProductsController', () => {
  let app: INestApplication;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  it('POST /sync/products should return status 201', async () => {
    const response = await request(app.getHttpServer())
      .post('/sync/products')
      .send({ productIds: IdentifierMother.generateArrayRandom() })
      .expect(201);

    expect(response.body.message).toBe(ProductsQueueService.message)

  });
});
