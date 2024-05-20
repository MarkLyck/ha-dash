import type { StorybookConfig } from '@storybook/nextjs'

const config: StorybookConfig = {
  stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
  ],
  framework: {
    name: '@storybook/nextjs',
    options: {},
  },
  docs: {
    autodocs: 'tag',
  },
  webpackFinal: async (config) => {
    if (config.module?.rules) {
      // This modifies the existing image rule to exclude .svg files
      // since you want to handle those files with @svgr/webpack
      const imageRule = config.module.rules.find((rule) =>
        // @ts-expect-error - "test" doesn't exist on rule
        rule.test?.test('.svg'),
      )
      if (imageRule) {
        // @ts-expect-error - "test" doesn't exist on rule
        imageRule.exclude = /\.svg$/
      }

      // Configure .svg files to be loaded with @svgr/webpack
      config.module.rules.push({
        test: /\.svg$/,
        use: ['@svgr/webpack'],
      })
    }

    return config
  },
}
export default config
