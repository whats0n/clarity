module.exports = {
  extends: [
    'stylelint-config-recommended-scss',
    'stylelint-config-recommended-vue',
    'stylelint-config-prettier-scss',
    'stylelint-prettier/recommended',
    'stylelint-config-rational-order',
  ],
  plugins: ['stylelint-scss', 'stylelint-prettier'],
  rules: {
    'prettier/prettier': true,
    'selector-class-pattern': null,
    'selector-pseudo-element-colon-notation': 'single',
    'at-rule-no-unknown': [
      true,
      {
        ignoreAtRules: [
          'function',
          'if',
          'else',
          'use',
          'return',
          'each',
          'include',
          'mixin',
          'for',
        ],
      },
    ],
    'property-no-unknown': [
      true,
      {
        ignoreProperties: ['/^mso-/'],
      },
    ],
    'function-no-unknown': null,
    'custom-property-no-missing-var-function': null,
  },
}
