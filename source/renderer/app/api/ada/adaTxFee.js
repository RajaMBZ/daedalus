// @flow
import type { AdaTransactionFee, RequestConfig } from './types';
import { request } from './lib/request';

export type AdaTxFeeParams = {
  sender: string,
  receiver: string,
  amount: string,
  // "groupingPolicy" - Spend everything from the address
  // "OptimizeForSize" for no grouping
  groupingPolicy: ?'OptimizeForSecurity' | 'OptimizeForSize',
};

export const adaTxFee = (
  config: RequestConfig,
  { sender, receiver, amount, groupingPolicy }: AdaTxFeeParams
): Promise<AdaTransactionFee> => (
  request(Object.assign({
    hostname: 'localhost',
    method: 'POST',
    path: `/api/txs/fee/${sender}/${receiver}/${amount}`,
  }, config), {}, { groupingPolicy })
);
