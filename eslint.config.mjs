// @ts-check
import withNuxt from './.nuxt/eslint.config.mjs'

export default withNuxt({
  // Your custom configs here
  rules: {
    // Custom rules
    'prettier/prettier': 'warn',
    'no-console': 'warn',
    'vue/no-unused-components': 'warn',
    'vue/multi-word-component-names': 'off'
  }
})
