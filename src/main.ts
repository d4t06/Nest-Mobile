import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as cookieParser from 'cookie-parser';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors({
    credentials: true,
    origin: ['http://localhost:3000', 'https://d4t06.github.io'],
  });

  app.use(cookieParser());
  app.setGlobalPrefix('api');
  await app.listen(process.env.PORT || 4000, () => {
    console.log(`App running on port:${process.env.PORT}`);
  });
}
bootstrap();
