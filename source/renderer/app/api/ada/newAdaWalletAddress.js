// @flow
import type { AdaAddress, RequestConfig } from './types';
import { request } from './lib/request';

export type NewAdaWalletAddressParams = {
  password: ?string,
  accountId: string,
};

export const newAdaWalletAddress = (
  config: RequestConfig,
  { password, accountId }: NewAdaWalletAddressParams
): Promise<AdaAddress> => (
  request(Object.assign({
    hostname: 'localhost',
    method: 'POST',
    path: '/api/addresses',
  }, config), { passphrase: password }, accountId)
);

