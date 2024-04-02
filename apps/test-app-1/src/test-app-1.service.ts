import { ConfigService } from '@libs/config';
import { Injectable } from '@nestjs/common';
import { TestApp1Config } from './config.schema';

@Injectable()
export class TestApp1Service {
  constructor(private configService: ConfigService<TestApp1Config>) {}

  getHello(): string {
    const isRunningLocally = this.configService.get('IS_RUNNING_LOCALLY');
    return isRunningLocally ? 'Running locally' : 'Not running locally';
  }
}
