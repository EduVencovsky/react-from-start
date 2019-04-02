const path = require('path')
const webpack = require('webpack')
const merge = require('webpack-merge')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const webPackBundleAnalyzer = require('webpack-bundle-analyzer')

const common = require('./webpack.config.common')
const appVersion = require('./package.json').version

module.exports = merge(common, {
    mode: 'production',
    target: 'web',
    devtool: false,
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: '[name].bundle.js',
        chunkFilename: '[chunkhash]_[name].js',
        publicPath: '/',
    },
    optimization: {
        runtimeChunk: 'single',
    },
    performance: {
        hints: 'warning',
    },
    plugins: [
        new CleanWebpackPlugin(),
        new webPackBundleAnalyzer.BundleAnalyzerPlugin({ analyzerMode: 'static' }),
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),
            APP_VERSION: appVersion
        }),
        new MiniCssExtractPlugin({
            filename: '[name].[contenthash].css',
            chunkFilename: '[name].css',
        }),
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, 'src', 'app', 'index.html'),
            filename: 'index.html',
            // favicon: 'src/favicon.ico',
            minify: {
                removeComments: true,
                removeRedundantAttributes: true,
                removeEmptyAttributes: true,
                removeStyleLinkTypeAttributes: true,
                collapseWhiteSpace: true,
                useShortDocType: true,
                keepClosingSlash: true,
                minifyJs: true, // uses UglifyJSPlugin
                // minifyCSS: true,
                minifyURLs: true,
            }
        }),
    ],
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                loader: 'babel-loader',
                exclude: /(node_modules)/,
            },
            {
                test: /\.(css|scss)$/,
                include: path.resolve(__dirname, 'src', 'app'),
                use: [
                    MiniCssExtractPlugin.loader,
                    {
                        loader: 'css-loader',
                        options: {
                            importLoaders: 2,
                            modules: false,
                            localIdentName: '[name]__[local]___[hash:base64:10]',
                            sourceMap: false,
                        },
                    },
                    {
                        loader: 'sass-loader',
                        options: {
                            sourceMap: false,
                        },
                    },
                ],
            },
            {
                test: /\.(jpg|jpeg|png|gif|svg)$/,
                use: ['file-loader']
            }
        ]
    },
})
