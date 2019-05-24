const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')

const merge = require('webpack-merge')
const common = require('./webpack.config.common')
const appVersion = require('./package.json').version

module.exports = merge(common, {
    mode: 'development',
    devtool: 'cheap-module-source-map',
    resolve: {
        extensions: ['.js', '.jsx', '.css'],
    },
    devServer: {
        stats: 'minimal',
        open: true, // auto open dev-server on browser
        overlay: true,
        historyApiFallback: true,
        // disableHostCheck: true, // this is dangerous
        headers: { 'Access-Control-Allow-Origin': '*' }, // this is also dangerous
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, 'src', 'index.html'),
            filename: 'index.html',
        }),
        new CleanWebpackPlugin(),
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),
            APP_VERSION: appVersion,
        })
    ],
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                use: ['babel-loader', 'eslint-loader'],
                exclude: /(node_modules)/,
            },
            {
                test: /\.css$/,
                include: path.resolve(__dirname, 'src', 'app'),
                use: [
                    {
                        loader: 'style-loader',
                    },
                    {
                        loader: 'css-loader',
                        options: {
                            modules: true,
                            localIdentName: '[path][name]_[local]',
                        },
                    }
                ],
            },
            {
                test: /\.(jpg|jpeg|png|gif|svg|eot|ttf|woff|woff2)$/,
                use: ['file-loader'],
            }
        ],
    },
})
