import { Module } from '@nestjs/common';

import { ConfigModule } from '@libs/config';

import { configSchema } from './config.schema';
import { TestApp2Controller } from './test-app-2.controller';
import { TestApp2Service } from './test-app-2.service';

@Module({
  imports: [
    ConfigModule.registerAsync({
      envFilePath: `${__dirname}/.env`,
      validate: (env) => configSchema.parse(env),
    }),
  ],
  controllers: [TestApp2Controller],
  providers: [TestApp2Service],
})
export class TestApp2Module {}
