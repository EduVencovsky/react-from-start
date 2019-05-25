const path = require('path')
const webpack = require('webpack')
const merge = require('webpack-merge')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const webPackBundleAnalyzer = require('webpack-bundle-analyzer')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
// const PurgecssPlugin = require('purgecss-webpack-plugin')
// const glob = require('glob-all')

const common = require('./webpack.config.common')
const appVersion = require('./package.json').version

module.exports = merge(common, {
    mode: 'production',
    devtool: false,
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: '[name].bundle.js',
        chunkFilename: '[name]_[chunkhash].js',
        publicPath: '/',
    },
    optimization: {
        // runtimeChunk: 'single',
        // minimizer: [new UglifyJsPlugin()],
    },
    performance: {
        hints: 'warning',
    },
    plugins: [
        new CleanWebpackPlugin(),
        new webPackBundleAnalyzer.BundleAnalyzerPlugin({
            analyzerMode: 'static',
        }),
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),
            APP_VERSION: appVersion,
        }),
        new MiniCssExtractPlugin({
            filename: '[name].[contenthash].css',
            chunkFilename: '[name].css',
        }),
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, 'src', 'index.html'),
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
            },
        })
        // new PurgecssPlugin({
        //     paths: [
        //         path.resolve(__dirname, 'src', 'index.html'),
        //         ...glob.sync(`${path.resolve(__dirname, 'src')}/*`, {
        //             nodir: true,
        //         })
        //     ],
        // })
    ],
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                loader: 'babel-loader',
                exclude: /(node_modules)/,
            },
            {
                test: /\.css$/,
                include: path.resolve(__dirname, 'src'),
                use: [
                    MiniCssExtractPlugin.loader,
                    {
                        loader: 'css-loader',
                        options: {
                            modules: false,
                            localIdentName:
                                '[name]__[local]___[hash:base64:10]',
                            sourceMap: false,
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
