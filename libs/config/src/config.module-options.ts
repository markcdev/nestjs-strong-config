import { ConfigModuleOptions as NestConfigModuleOptions } from '@nestjs/config';

export type ConfigModuleOptions = Pick<
  NestConfigModuleOptions,
  'envFilePath' | 'validate'
>;
