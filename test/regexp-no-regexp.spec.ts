import { betterer } from '@betterer/betterer';

import { createFixture } from './fixture';

describe('betterer', () => {
  it('should throw if there is no regexp', async () => {
    const { paths, logs, cleanup } = await createFixture('regexp-no-regexp', {
      '.betterer.js': `
const { regexp } = require('@betterer/regexp');

module.exports = {
  'regexp': () => regexp()
};      
    `
    });

    const configPaths = [paths.config];
    const resultsPath = paths.results;

    await expect(async () => await betterer({ configPaths, resultsPath, workers: false })).rejects.toThrow();

    expect(logs).toMatchSnapshot();

    await cleanup();
  });
});
