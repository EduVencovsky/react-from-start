const path = require('path')

module.exports = {
    entry: path.resolve(__dirname, 'src'),
    target: 'web',
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: '[name].bundle.js',
        publicPath: '/',
    },
    resolve: {
        extensions: ['.js', '.jsx', '.css'],
    },
}
