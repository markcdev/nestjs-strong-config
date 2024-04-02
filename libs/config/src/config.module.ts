import { DynamicModule, Global, Module } from '@nestjs/common';
import { ConfigModule as NestConfigModule } from '@nestjs/config';
import { ConfigService } from './config.service';
import { ConfigModuleOptions } from './config.module-options';

@Global()
@Module({})
export class ConfigModule {
  public static registerAsync(options: ConfigModuleOptions): DynamicModule {
    return {
      module: ConfigModule,
      exports: [ConfigService],
      imports: [NestConfigModule.forRoot({ isGlobal: true, ...options })],
      providers: [ConfigService],
    };
  }
}
