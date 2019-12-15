module.exports = function override(config) {
  // Use Preact instead of React
  config.resolve.alias = Object.assign(config.resolve.alias, {
    react: 'preact/compat',
    'react-dom': 'preact/compat',
  });

  return config;
};
