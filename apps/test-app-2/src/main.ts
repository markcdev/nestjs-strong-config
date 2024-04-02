import { NestFactory } from '@nestjs/core';

import { ConfigService } from '@libs/config';

import { TestApp2Config } from './config.schema';
import { TestApp2Module } from './test-app-2.module';

async function bootstrap() {
  const app = await NestFactory.create(TestApp2Module);

  const configService = app.get(ConfigService<TestApp2Config>);

  const databasePassword = configService.get('DATABASE_PASSWORD');
  const databaseUrl = configService.get('DATABASE_URL');
  const databaseUser = configService.get('DATABASE_USER');

  console.log('test-app-2 databasePassword: ', databasePassword);
  console.log('test-app-2 databaseUrl: ', databaseUrl);
  console.log('test-app-2 databaseUser: ', databaseUser);

  await app.listen(3000);
}
bootstrap();
