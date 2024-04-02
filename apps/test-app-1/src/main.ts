import { NestFactory } from '@nestjs/core';

import { ConfigService } from '@libs/config';

import { TestApp1Module } from './test-app-1.module';
import { TestApp1Config } from './config.schema';

async function bootstrap() {
  const app = await NestFactory.create(TestApp1Module);

  const configService = app.get(ConfigService<TestApp1Config>);

  const baseUrl = configService.get('BASE_URL');
  const httpPort = configService.get('HTTP_PORT');
  const isRunningLocally = configService.get('IS_RUNNING_LOCALLY');

  console.log('test-app-1 baseURL: ', baseUrl);
  console.log('test-app-1 httpPort: ', httpPort);
  console.log('test-app-1 isRunningLocally: ', isRunningLocally);

  await app.listen(httpPort);
}
bootstrap();
