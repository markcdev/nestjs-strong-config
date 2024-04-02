import { Controller, Get } from '@nestjs/common';
import { TestApp3Service } from './test-app-3.service';

@Controller()
export class TestApp3Controller {
  constructor(private readonly testApp3Service: TestApp3Service) {}

  @Get()
  getHello(): string {
    return this.testApp3Service.getHello();
  }
}
