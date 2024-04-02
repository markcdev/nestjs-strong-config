import { Module } from '@nestjs/common';
import { TestApp1Controller } from './test-app-1.controller';
import { TestApp1Service } from './test-app-1.service';
import { ConfigModule } from '@libs/config';
import { configSchema } from './config.schema';

@Module({
  imports: [
    ConfigModule.registerAsync({
      envFilePath: `${__dirname}/.env`,
      validate: (env) => configSchema.parse(env),
    }),
  ],
  controllers: [TestApp1Controller],
  providers: [TestApp1Service],
})
export class TestApp1Module {}
