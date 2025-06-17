import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import cookieParser from 'cookie-parser';
import * as dotenv from 'dotenv';
dotenv.config({
  path: 'env.local',
});

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const whiteList = process.env?.WHITE_LIST?.split(', ') || [];

  app.enableCors({
    credentials: true,
    origin: [...whiteList],
  });

  app.use(cookieParser());

  app.setGlobalPrefix('api');

  const PORT = process.env.PORT || 4000;

  await app.listen(PORT, () => {
    console.log(`App running on port: ${PORT}, whiteList: ${whiteList}`);
  });
}
bootstrap();
