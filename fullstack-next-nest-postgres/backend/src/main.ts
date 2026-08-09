import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Libera a comunicação com o Frontend (Next.js, React, etc.)
  app.enableCors();

  // O '0.0.0.0' libera o acesso para fora do contêiner Docker
  await app.listen(3333, '0.0.0.0');
}
bootstrap();