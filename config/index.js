const {resolve} = require('path'),
    srcPath = resolve(__dirname, '../src')

module.exports = {
    srcPath: srcPath,
    distPath: resolve(__dirname, '../dist'),
    publicPath: '/',
    assets: 'assets',
    htmlPlugin: {                               // html-webpack-plugin config
        title: 'webpack building',
        template: 'index.html',
        favicon: './src/images/favicon.ico'
    },
}