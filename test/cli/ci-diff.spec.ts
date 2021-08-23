import { startΔ, ciΔ } from '@betterer/cli';

import { createFixture } from '../fixture';

const ARGV = ['node', './bin/betterer'];

describe('betterer ci', () => {
  it('should add a diff to the suiteSummary if there is any change to the results file', async () => {
    const { paths, logs, cleanup, resolve, writeFile } = await createFixture('ci-diff', {
      'src/index.ts': `
const a = 'a';
const one = 1;
console.log(a * one);
      `,
      '.betterer.ts': `
import { typescript } from '@betterer/typescript';

export default {
  test: () => typescript('./tsconfig.json', {
    strict: true
  }).include('./src/**/*.ts')
};
      `,
      'tsconfig.json': `
{
  "compilerOptions": {
    "noEmit": true,
    "lib": ["esnext"],
    "moduleResolution": "node",
    "target": "ES5",
    "typeRoots": ["../../node_modules/@types/"],
    "resolveJsonModule": true
  },
  "include": ["./src/**/*", ".betterer.ts"]
}
      `
    });

    const fixturePath = paths.cwd;
    const indexPath = resolve('./src/index.ts');

    await startΔ(fixturePath, ARGV, false);

    await writeFile(indexPath, `const a = 'a';\nconst one = 1;\nconsole.log(one + one);\nconsole.log(a * one);`);

    const suiteSummary = await ciΔ(fixturePath, ARGV);

    expect(suiteSummary.changed).toHaveLength(1);
    expect(suiteSummary.worse).toHaveLength(0);

    expect(logs).toMatchSnapshot();

    await cleanup();
  });
});