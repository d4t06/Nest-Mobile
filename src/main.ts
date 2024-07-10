import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors({
    credentials: true,
    origin: ['http://localhost:3000', 'https://next-mobile-ebon.vercel.app'],
  });

  app.setGlobalPrefix('api');
  await app.listen(process.env.PORT || 4000, () => {
    console.log(`App running on port:${process.env.PORT}`);
  });
}
bootstrap();
