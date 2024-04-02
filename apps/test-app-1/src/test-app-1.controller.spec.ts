import { Test, TestingModule } from '@nestjs/testing';
import { TestApp1Controller } from './test-app-1.controller';
import { TestApp1Service } from './test-app-1.service';

describe('TestApp1Controller', () => {
  let testApp1Controller: TestApp1Controller;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [TestApp1Controller],
      providers: [TestApp1Service],
    }).compile();

    testApp1Controller = app.get<TestApp1Controller>(TestApp1Controller);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(testApp1Controller.getHello()).toBe('Hello World!');
    });
  });
});
