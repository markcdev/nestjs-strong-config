import { Injectable } from '@nestjs/common';

@Injectable()
export class TestApp2Service {
  getHello(): string {
    return 'Hello World!';
  }
}
