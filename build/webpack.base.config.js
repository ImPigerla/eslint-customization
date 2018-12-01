let {resolve} = require('path'),
    {distPath, srcPath, publicPath, assets} = require('../config'),
    isProduct = process.env.NODE_ENV === 'production';

console.log('======================== Is production mode:', isProduct, '========================');

module.exports = {
    mode: isProduct ? 'production' : 'development',
    entry: {
        app: resolve(__dirname, '../src/index.js')
    },
    devtool: isProduct ? 'source-map' : 'inline-source-map',
    output: {
        filename: `${assets}/js/[name].bundle.js?v=[${isProduct ? 'contenthash' : 'hash'}]`,
        path: distPath,
        publicPath: publicPath,
        pathinfo: false // build performance
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                include: srcPath,
                use: 'babel-loader',
                exclude: file => (
                    /node_modules/.test(file) &&
                    !/\.vue\.js/.test(file)
                )
            }
        ]
    },
    resolve: {
        extensions: ['.js']
    }
}