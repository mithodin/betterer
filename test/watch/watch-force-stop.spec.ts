import { betterer } from '@betterer/betterer';

import { createFixture } from '../fixture';

describe('betterer.watch', () => {
  it('should stop when forced', async () => {
    const { logs, paths, cleanup } = await createFixture('watch-force-stop', {
      '.betterer.ts': `
import { tsquery } from '@betterer/tsquery';

export default {
  test: () => tsquery(
    'CallExpression > PropertyAccessExpression[expression.name="console"][name.name="log"]'
  ).include('./src/**/*.ts')
};
      `
    });

    const configPaths = [paths.config];
    const resultsPath = paths.results;
    const { cwd } = paths;

    const runner = await betterer.watch({ configPaths, cwd, resultsPath, workers: false });

    await runner.stop(true);

    expect(logs).toMatchSnapshot();

    await cleanup();
  });
});
