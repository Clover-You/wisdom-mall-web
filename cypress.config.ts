import { defineConfig } from 'cypress'

export default defineConfig({
  component: {
    devServer: {
      framework: 'next',
      bundler: 'webpack',
    },
    specPattern: '**/*.spec.{js,jsx,ts,tsx}',
  },

  e2e: {
    baseUrl: 'http://localhost:3000',
    specPattern: '**/*.spec.{js,jsx,ts,tsx}',
  },
})
