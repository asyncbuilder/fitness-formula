import { INestApplication } from '@nestjs/common';
import { Test } from '@nestjs/testing';
import request from 'supertest';
import { App } from 'supertest/types';
import { afterAll, beforeAll, describe, expect, it } from 'vitest';
import { AdminModule } from './admin.module.js';

describe('AdminController (admin class cancellation)', () => {
  let app: INestApplication<App>;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      imports: [AdminModule],
    }).compile();

    app = moduleRef.createNestApplication();
    await app.init();
  });

  it('lists upcoming classes for the admin', async () => {
    const response = await request(app.getHttpServer()).get('/admin/classes').expect(200);

    expect(response.body).toHaveLength(3);
    expect(response.body[0]).toMatchObject({ id: 'class_1', title: 'Power Flow', status: 'SCHEDULED' });
  });

  it('cancels a class manually with a reason', async () => {
    const response = await request(app.getHttpServer())
      .post('/admin/classes/class_1/cancel')
      .send({ reason: 'Trainer is sick' })
      .expect(200);

    expect(response.body).toMatchObject({
      id: 'class_1',
      status: 'CANCELLED',
      cancellationReason: 'Trainer is sick',
    });
  });

  it('cancels a class without a reason using the default one', async () => {
    const response = await request(app.getHttpServer()).post('/admin/classes/class_2/cancel').expect(200);

    expect(response.body).toMatchObject({
      id: 'class_2',
      status: 'CANCELLED',
      cancellationReason: 'Cancelled by administrator',
    });
  });

  it('rejects unknown class ids with 404', async () => {
    await request(app.getHttpServer()).post('/admin/classes/class_missing/cancel').expect(404);
  });

  afterAll(async () => {
    await app.close();
  });
});
