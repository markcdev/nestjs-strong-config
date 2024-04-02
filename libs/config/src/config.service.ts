import { Injectable } from '@nestjs/common';
import { ConfigService as NestConfigService } from '@nestjs/config';

@Injectable()
export class ConfigService<TConfig> {
  constructor(private nestConfigService: NestConfigService<TConfig, true>) {}

  get<TKey extends keyof TConfig>(key: TKey): TConfig[TKey] {
    const value = this.nestConfigService.get<TConfig>(key, { infer: true });
    return value as TConfig[TKey];
  }
}
