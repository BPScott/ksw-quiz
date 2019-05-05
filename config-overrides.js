module.exports = function override(config) {
  // Use Preact instead of React
  config.resolve.alias = Object.assign(config.resolve.alias, {
    react: 'preact/compat',
    'react-dom': 'preact/compat',
  });

  // Hint explicit react version to eslint to avoid warnings
  // The default value of "detect" does not work as react is not a dependency
  config.module.rules.forEach((rule) => {
    (rule.use || []).forEach((useBlock) => {
      if (useBlock.options && 'useEslintrc' in useBlock.options) {
        useBlock.options.baseConfig.settings = {
          react: {version: '16.8'},
        };
      }
    });
  });

  return config;
};
