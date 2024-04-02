import { Test, TestingModule } from '@nestjs/testing';
import { TestApp3Controller } from './test-app-3.controller';
import { TestApp3Service } from './test-app-3.service';

describe('TestApp3Controller', () => {
  let testApp3Controller: TestApp3Controller;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [TestApp3Controller],
      providers: [TestApp3Service],
    }).compile();

    testApp3Controller = app.get<TestApp3Controller>(TestApp3Controller);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(testApp3Controller.getHello()).toBe('Hello World!');
    });
  });
});
