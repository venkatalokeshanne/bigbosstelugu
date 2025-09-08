module.exports = {
  extends: ['next/core-web-vitals'],
  rules: {
    // Disable some rules for faster development
    '@next/next/no-img-element': 'warn',
    'react/no-unescaped-entities': 'off',
    'react-hooks/exhaustive-deps': 'warn',
  },
}
