import { simpleFaker } from '@faker-js/faker';
import { createMock } from '@golevelup/ts-jest';

import { ConfigService as NestConfigService } from '@nestjs/config';
import { Test, TestingModule } from '@nestjs/testing';

import { match } from 'ts-pattern';

import { ConfigService } from './config.service';
import * as Utils from './utils';

type TestConfig = {
  bar: string;
  baz: number;
  foo: boolean;
  gar: string;
};

describe('ConfigService', () => {
  const mockConfig: TestConfig = {
    bar: simpleFaker.string.alpha(),
    baz: simpleFaker.number.int(),
    foo: simpleFaker.datatype.boolean(),
    gar: simpleFaker.string.alpha(),
  };

  let mockNestConfigService = createMock<NestConfigService<TestConfig>>();
  let service: ConfigService<TestConfig>;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        ConfigService,
        {
          provide: NestConfigService<TestConfig>,
          useValue: mockNestConfigService,
        },
      ],
    }).compile();

    mockNestConfigService = module.get(NestConfigService);
    service = module.get<ConfigService<TestConfig>>(ConfigService);
  });

  beforeEach(() => {
    mockNestConfigService.get.mockImplementation((key: keyof TestConfig) => {
      return match(key)
        .with('bar', () => mockConfig.bar)
        .with('baz', () => mockConfig.baz)
        .with('foo', () => mockConfig.foo)
        .with('gar', () => mockConfig.gar)
        .exhaustive();
    });
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  test('should return expected value for matching config key', () => {
    Utils.toTypedObjectKey(mockConfig).forEach((key) => {
      const result = service.get(key);

      // correct value for key
      expect(result).toBe(mockConfig[key]);

      // correct value type for key
      expect(typeof result).toBe(typeof mockConfig[key]);

      // framework config service was called with correct key
      expect(mockNestConfigService.get).toHaveBeenCalledWith(key, {
        infer: true,
      });
    });
  });
});
