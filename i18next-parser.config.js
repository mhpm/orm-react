module.exports = {
  locales: ['en', 'es'],
  input: ['src/**/*.{ts,tsx}'],
  output: 'src/locales/$LOCALE/translation.json',
  keySeparator: '.',
  useKeysAsDefaultValue: true,
};
