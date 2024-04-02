import { Controller, Get } from '@nestjs/common';
import { TestApp1Service } from './test-app-1.service';

@Controller()
export class TestApp1Controller {
  constructor(private readonly testApp1Service: TestApp1Service) {}

  @Get()
  getHello(): string {
    return this.testApp1Service.getHello();
  }
}
