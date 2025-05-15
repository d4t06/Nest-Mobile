import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors({
    credentials: true,
    origin: [
      'http://localhost:3000',
      'https://next-mobile-ebon.vercel.app',
      'https://nuxt-mobile.netlify.app',
    ],
  });

  app.setGlobalPrefix('api');

  const PORT = process.env.PORT || 4000;

  await app.listen(PORT, () => {
    console.log(`App running on port:${PORT}`);
  });
}
bootstrap();
