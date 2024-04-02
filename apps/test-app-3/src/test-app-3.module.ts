import { Module } from '@nestjs/common';
import { TestApp3Controller } from './test-app-3.controller';
import { TestApp3Service } from './test-app-3.service';

@Module({
  imports: [],
  controllers: [TestApp3Controller],
  providers: [TestApp3Service],
})
export class TestApp3Module {}
