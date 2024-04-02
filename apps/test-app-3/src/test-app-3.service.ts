import { Injectable } from '@nestjs/common';

@Injectable()
export class TestApp3Service {
  getHello(): string {
    return 'Hello World!';
  }
}
