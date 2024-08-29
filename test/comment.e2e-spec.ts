import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import request from 'supertest';
import { AppModule } from './../src/app.module';
import { CreateCommentDto } from '@/comment/dto/create.comment.dto';

describe('Comment controller (e2e)', () => {
  let app: INestApplication;

  let token = '';

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  it('it should product comments', () => {
    return request(app.getHttpServer()).get('/comments').expect(200);
  });

  //    either return or call done()
  it('it should login', (done) => {
    request(app.getHttpServer())
      .post('/auth/login')
      .send({
        username: 'admin',
        password: '123123',
      })
      .expect(201)
      .end((err, res) => {
        token = res.body['token'];

        done();
      });
  });

  it('is should create comment', () => {
    return request(app.getHttpServer())
      .post('/comments')
      .send({
        product_id: 1,
        content: 'OK',
        username: 'test',
      } as CreateCommentDto)
      .auth(token, { type: 'bearer' })
      .expect(201);
  });
});
