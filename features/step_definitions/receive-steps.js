import { Given, When, Then } from 'cucumber';
import { expect } from 'chai';
import { waitAndClick, waitAndSelect } from '../support/helpers/shared-helpers';

Given('I generate {int} addresses', async function (numberOfAddresses) {
  for (let i = 0; i < numberOfAddresses; i++) {
    await waitAndClick(this.client, '.generateAddressButton:not(.WalletReceive_spinning)');
  }
});

When('I click the ShowUsed switch', async function() {
  await waitAndClick(this.client, '.SimpleSwitch_switch');
});

Then('I should see {int} addresses', async function (numberOfAddresses) {
  const addresses = await waitAndSelect(this.client, '.WalletReceive_walletAddress', '.generatedAddress-' + numberOfAddresses, 50000);
  expect(addresses.value.length).to.equal(numberOfAddresses);
});
