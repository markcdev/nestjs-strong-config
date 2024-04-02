import { Controller, Get } from '@nestjs/common';
import { TestApp2Service } from './test-app-2.service';

@Controller()
export class TestApp2Controller {
  constructor(private readonly testApp2Service: TestApp2Service) {}

  @Get()
  getHello(): string {
    return this.testApp2Service.getHello();
  }
}
