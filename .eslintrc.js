module.exports = {
  extends: [
    'airbnb',
    'prettier',
    'prettier/@typescript-eslint',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
  ],
  plugins: ['react', '@typescript-eslint'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    sourceType: 'module',
    project: './tsconfig.json',
  },
  rules: {
    'react/jsx-filename-extension': [2, { extensions: ['.tsx', '.ts'] }],
    'import/extensions': [
      2,
      { extensions: ['.js', '.jsx', '.json', '.ts', '.tsx'] },
    ],
    '@typescript-eslint/explicit-function-return-type': 0,
    '@typescript-eslint/indent': ['error', 2],
    '@typescript-eslint/prefer-interface': 0,
    '@typescript-eslint/member-delimiter-style': 0,
  },
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.ts', '.tsx'],
      },
    },
  },
}
