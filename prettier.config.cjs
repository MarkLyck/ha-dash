/** @type {import("prettier").Config} */
const config = {
  plugins: [
    require.resolve('@ianvs/prettier-plugin-sort-imports'),
    require.resolve('prettier-plugin-tailwindcss'),
  ],
  semi: false,
  singleQuote: true,
  tabWidth: 2,
  trailingComma: 'es5',
  // @ts-expect-error - ?
  importOrder: [
    '^(react/(.*)$)|^(react$)',
    '^(next/(.*)$)|^(next$)',
    '<THIRD_PARTY_MODULES>',
    '',
    '^types$',
    '^@local/(.*)$',
    '^@/config/(.*)$',
    '^@/lib/(.*)$',
    '^@/components/(.*)$',
    '^@/styles/(.*)$',
    '^[./]',
  ],
  importOrderSeparation: false,
  importOrderSortSpecifiers: true,
  importOrderBuiltinModulesToTop: true,
  importOrderParserPlugins: ['typescript', 'jsx', 'decorators-legacy'],
  importOrderMergeDuplicateImports: true,
}

module.exports = config
