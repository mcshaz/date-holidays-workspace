/* global process, module */
module.exports = function (api) {
  // This caches the Babel config
  api.cache.using(() => process.env.NODE_ENV)
  return {
    presets: [[
      '@babel/preset-env', {
        useBuiltIns: 'usage',
        corejs: '3.27'
      }]],
    plugins: [['@babel/plugin-transform-runtime']]
  }
}
