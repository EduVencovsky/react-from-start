const path = require('path')

module.exports = {
    entry: path.resolve(__dirname, 'src', 'app'),
    target: 'web',
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: '[name].bundle.js',
        publicPath: '/',
    },
}