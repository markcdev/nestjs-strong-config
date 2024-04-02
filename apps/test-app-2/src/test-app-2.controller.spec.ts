import { Test, TestingModule } from '@nestjs/testing';
import { TestApp2Controller } from './test-app-2.controller';
import { TestApp2Service } from './test-app-2.service';

describe('TestApp2Controller', () => {
  let testApp2Controller: TestApp2Controller;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [TestApp2Controller],
      providers: [TestApp2Service],
    }).compile();

    testApp2Controller = app.get<TestApp2Controller>(TestApp2Controller);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(testApp2Controller.getHello()).toBe('Hello World!');
    });
  });
});
