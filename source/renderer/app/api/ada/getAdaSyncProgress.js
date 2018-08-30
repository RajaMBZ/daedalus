// @flow
import type { AdaSyncProgressResponse, RequestConfig } from './types';
import { request } from './lib/request';

export const getAdaSyncProgress = (
  config: RequestConfig,
): Promise<AdaSyncProgressResponse> => (
  request(Object.assign({
    hostname: 'localhost',
    method: 'GET',
    path: '/api/settings/sync/progress',
  }, config))
);
