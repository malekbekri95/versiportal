import nx from '@nx/eslint-plugin';

export default [
  ...nx.configs['flat/base'],
  ...nx.configs['flat/typescript'],
  ...nx.configs['flat/javascript'],
  {
    ignores: ['**/dist', '**/out-tsc', '**/vitest.config.*.timestamp*'],
  },
  {
    files: ['**/*.ts', '**/*.tsx', '**/*.js', '**/*.jsx'],
    rules: {
      '@nx/enforce-module-boundaries': [
        'error',
        {
          enforceBuildableLibDependency: true,
          allow: ['^.*/eslint(\\.base)?\\.config\\.[cm]?[jt]s$'],
          depConstraints: [
            // Scopes: domains stay isolated and may only reach into shared.
            {
              sourceTag: 'scope:shell',
              onlyDependOnLibsWithTags: ['scope:shell', 'scope:shared'],
            },
            {
              sourceTag: 'scope:quote',
              onlyDependOnLibsWithTags: ['scope:quote', 'scope:shared'],
            },
            {
              sourceTag: 'scope:claims',
              onlyDependOnLibsWithTags: ['scope:claims', 'scope:shared'],
            },
            {
              sourceTag: 'scope:account',
              onlyDependOnLibsWithTags: ['scope:account', 'scope:shared'],
            },
            {
              sourceTag: 'scope:bff',
              onlyDependOnLibsWithTags: ['scope:bff', 'scope:shared'],
            },
            {
              sourceTag: 'scope:shared',
              onlyDependOnLibsWithTags: ['scope:shared'],
            },
            { sourceTag: 'scope:e2e', onlyDependOnLibsWithTags: ['*'] },
            { sourceTag: 'scope:tools', onlyDependOnLibsWithTags: ['*'] },
            // Types: app > feature > ui / data-access > util > contracts.
            {
              sourceTag: 'type:app',
              onlyDependOnLibsWithTags: [
                'type:feature',
                'type:ui',
                'type:data-access',
                'type:util',
                'type:contracts',
              ],
            },
            {
              sourceTag: 'type:feature',
              onlyDependOnLibsWithTags: [
                'type:feature',
                'type:ui',
                'type:data-access',
                'type:util',
                'type:contracts',
              ],
            },
            {
              sourceTag: 'type:ui',
              onlyDependOnLibsWithTags: [
                'type:ui',
                'type:util',
                'type:contracts',
              ],
            },
            {
              sourceTag: 'type:data-access',
              onlyDependOnLibsWithTags: [
                'type:data-access',
                'type:util',
                'type:contracts',
              ],
            },
            {
              sourceTag: 'type:util',
              onlyDependOnLibsWithTags: ['type:util', 'type:contracts'],
            },
            {
              sourceTag: 'type:contracts',
              onlyDependOnLibsWithTags: ['type:contracts'],
            },
          ],
        },
      ],
    },
  },
  {
    files: [
      '**/*.ts',
      '**/*.tsx',
      '**/*.cts',
      '**/*.mts',
      '**/*.js',
      '**/*.jsx',
      '**/*.cjs',
      '**/*.mjs',
    ],
    // Override or add rules here
    rules: {},
  },
  {
    files: ['**/*.json'],
    // Override or add rules here
    rules: {},
    languageOptions: {
      parser: await import('jsonc-eslint-parser'),
    },
  },
];
