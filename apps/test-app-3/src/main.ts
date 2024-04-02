import { NestFactory } from '@nestjs/core';
import { TestApp3Module } from './test-app-3.module';

async function bootstrap() {
  const app = await NestFactory.create(TestApp3Module);
  await app.listen(3000);
}
bootstrap();
