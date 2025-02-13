module.exports = {
  threshold: 100,
  exclude: [
    'node_modules/**',
    'dist/**',
    '**/*.test.js',
    '**/*.config.js'
  ],
  minTokens: 50,
  reporters: ['console', 'json'],
};