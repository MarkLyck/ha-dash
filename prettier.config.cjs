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
  // @ts-expect-error - tailwindFunctions not in prettier.Config
  tailwindFunctions: ['tv', 'cn', 'clsx', 'cva'],
  importOrder: [
    '',
    '<BUILTIN_MODULES>',
    '',
    '<THIRD_PARTY_MODULES>',
    '',
    '^@/(.*)$',
    '',
    '^[./]',
    '',
  ],
}

module.exports = config
