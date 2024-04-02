import { z } from 'zod';

export const configSchema = z.object({
  DATABASE_URL: z.coerce.string({
    description: 'test-app-2 database url',
    invalid_type_error: 'DATABASE_URL should be a string',
    required_error: 'DATABASE_URL is required',
  }),
  DATABASE_USER: z.coerce.string({
    description: 'test-app-2 database user',
    invalid_type_error: 'DATABASE_USER should be a number',
    required_error: 'DATABASE_USER is required',
  }),
  DATABASE_PASSWORD: z.coerce.string({
    description: 'test-app-2 database password',
    invalid_type_error: 'DATABASE_PASSWORD should be a string',
    required_error: 'DATABASE_PASSWORD is required',
  }),
});

export type TestApp2Config = z.infer<typeof configSchema>;
