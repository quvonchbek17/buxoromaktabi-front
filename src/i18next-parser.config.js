// / https://github.com/i18next/i18next-parser#options

module.exports = {
  locales: ["Uz", "Ru"],
  namespaceSeparator: false,
  keySeparator: false,
  useKeysAsDefaultValue: true,
  output: "src/assets/locales/$LOCALE/$NAMESPACE.json",
  createOldCatalogs: false,
  sort: true,
};
