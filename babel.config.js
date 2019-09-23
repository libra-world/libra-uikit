module.exports = {
  presets: [['@babel/env', { loose: true }], '@babel/preset-react'],
  // plugins: ['@babel/transform-runtime'],
  plugins: ['babel-plugin-styled-components'],
  env: {
    esm: {
      presets: [['@babel/env', { loose: true, modules: false }], '@babel/preset-react']
      // plugins: [['@babel/transform-runtime', { useESModules: true }]],
    }
  }
};
