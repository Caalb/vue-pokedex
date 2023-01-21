module.exports = {
  root: true,
  env: {
    browser: true,
    'jest/globals': true,
    node: true,
  },
  parserOptions: {
    parser: '@babel/eslint-parser',
    requireConfigFile: false,
  },
  extends: ['@nuxtjs', 'plugin:nuxt/recommended', 'prettier'],
  plugins: ['jest'],
  // add your custom rules here
  rules: {
    'arrow-spacing': 'error',
    'comma-dangle': ['error', 'always-multiline'],
    'comma-spacing': ['error', { 'before': false, 'after': true }],
    'eol-last': ['error', 'always'],
    'func-call-spacing': ['error', 'never'],
    'semi-spacing': ['error', { 'before': false, 'after': true }],
    'key-spacing': ['error', { 'afterColon': true }],
    'keyword-spacing': ['error', { 'after': true }],
    'no-multi-spaces': ['error'],
    'no-multiple-empty-lines': ['error', { 'max': 1, 'maxEOF': 0 }],
    'no-unused-vars': ['error', { 'varsIgnorePattern': 'app || VueCircleSlider' }],
    'object-curly-spacing': [ 'error', 'always' ],
    'vue/script-setup-uses-vars': 'off',
    'space-before-blocks': [
      'error',
      {
        'functions': 'always',
        'keywords': 'always',
        'classes': 'always',
      },
    ],
    'padding-line-between-statements': ['error',
      { 'blankLine': 'always', 'prev': '*', 'next': 'return' },
      { 'blankLine': 'always', 'prev': '*', 'next': 'try' },
      { 'blankLine': 'always', 'prev': 'block-like', 'next': '*' },
      { 'blankLine': 'always', 'prev': ['const', 'let', 'var'], 'next': '*' },
      { 'blankLine': 'any', 'prev': ['const', 'let', 'var'], 'next': ['const', 'let', 'var'] },
    ],
    'space-unary-ops': [
      2,
      {
        'words': true,
        'nonwords': false,
        'overrides': {
          '!': true,
          '!!': true,
        },
      },
    ],
    'quotes': [ 'error', 'single' ],
    'semi': [ 'error', 'always' ],
    'space-before-function-paren': ['error', {
      'anonymous': 'never',
      'named': 'never',
      'asyncArrow': 'always',
    }],
    'space-infix-ops': ['error', { 'int32Hint': false }],
    'vue/html-self-closing': [
      'error',
      {
        'html': {
          'void': 'always',
          'normal': 'always',
          'component': 'always',
        },
      },
    ],
    'vue/prop-name-casing': [ 1, 'snake_case' ],
    'vue/script-indent': [ 'error', 2, {
      'baseIndent': 1,
    },
    ],
  },
};
