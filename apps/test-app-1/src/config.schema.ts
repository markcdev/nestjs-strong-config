import { z } from 'zod';

export const configSchema = z.object({
  BASE_URL: z.coerce.string({
    description: 'test-app-1 base url',
    invalid_type_error: 'BASE_URL should be a string',
    required_error: 'BASE_URL is required',
  }),
  HTTP_PORT: z.coerce.number({
    description: 'test-app-1 http port',
    invalid_type_error: 'HTTP_PORT should be a number',
    required_error: 'HTTP_PORT is required',
  }),
  IS_RUNNING_LOCALLY: z.coerce
    .boolean({
      description: 'test-app-1 is running locally',
    })
    .default(true)
    .optional(),
});

export type TestApp1Config = z.infer<typeof configSchema>;
