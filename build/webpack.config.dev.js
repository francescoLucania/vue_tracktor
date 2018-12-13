'use strict'
const webpack = require('webpack')
const { VueLoaderPlugin } = require('vue-loader')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const CopyWebpackPlugin = require('copy-webpack-plugin')
const path = require('path')
function resolve (dir) {
    return path.join(__dirname, '..', dir)
}

const utils = require('./utils')

module.exports = {
    mode: 'development',

    entry: [
        './src/app.js'
    ],
    devServer: {
        hot: true,
        watchOptions: {
            poll: true
        }
    },
    module: {
        rules: [
            {
                test: /\.vue$/,
                use: 'vue-loader'
            },

            {
                test: /\.css$/,
                use: [
                    'vue-style-loader',
                    'css-loader'
                ]
            },

            {
                test: /\.js$/,
                use: 'babel-loader'
            },

            {
                test: /\.scss$/,
                use: [
                    "vue-style-loader", // creates style nodes from JS strings
                    "css-loader", // translates CSS into CommonJS
                    "sass-loader" // compiles Sass to CSS, using Node Sass by default
                ]
            },

            {
                test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
                use: {
                    loader: 'url-loader',
                    options: {
                        limit: 10000,
                        name: utils.assetsPath('img/[name].[hash:7].[ext]')
                    }
                }
            }, {
                test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
                use: {
                    loader: 'url-loader',
                    options: {
                        limit: 10000,
                        name: utils.assetsPath('img/[name].[hash:7].[ext]')
                    }
                }
            }, {
                test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
                use: {
                    loader: 'url-loader',
                    options: {
                        limit: 10000,
                        name: utils.assetsPath('fonts/[name].[hash:7].[ext]')
                    }
                }
            }

        ]
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new VueLoaderPlugin(),
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: 'index.html',
            inject: true
        }),
        new CopyWebpackPlugin([{
            from: resolve('assets/img'),
            to: resolve('img'),
            toType: 'dir'
        }]),
        new webpack.ProvidePlugin({
            $: 'jquery',
            jquery: 'jquery',
            'window.jQuery': 'jquery',
            jQuery: 'jquery'
        })
    ]
}