const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
module.exports = {
    entry: {
        bundle: [
            path.resolve(__dirname, 'src/index.jsx')
        ],
        bundle2: [
            path.resolve(__dirname, 'src/index2.jsx')
        ],
        vendor:['react','react-dom','antd','react-gmaps'],
        data:['./src/data/data.json']
    },
    output: {
        path: path.resolve(__dirname, './dist_test3/'),
        filename: '[name].js'
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': "'production'"
        }),
        new UglifyJsPlugin({
            parallel:true,
            cache:true,
            sourceMap: false,
            uglifyOptions:{
                compress:{
                    warnings: true,
                    drop_console: true
                }
            }
        }),
        new ExtractTextPlugin({
            filename: "css/[name].css",
            allChunks:true
        }),
        new webpack.optimize.CommonsChunkPlugin({
            name: ["commons","vendor","data"],
            filename: "[name].js"
        }),
        new webpack.optimize.CommonsChunkPlugin({
            name: ["data"],
            filename: "data/[name].js"
        })
    ],
    module: {
        rules: [
            { test: /\.(js|jsx)$/, exclude: /node_modules/, loader: "babel-loader" },

            {
                test: /^[^\.]*(?!\.small)\.(svg|png|jpeg|jpg|gif)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            outputPath: "images/"
                        }
                    }
                ]
            },
            {
                test: /\.small\.(svg|png|jpeg|jpg|gif)$/,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 99999999
                        }
                    }
                ]
            },
            {
                test: /\.css$/,
                use: ExtractTextPlugin.extract({
                    fallback: "style-loader",
                    use: [
                        {
                            loader: 'css-loader',
                            options: {
                                sourceMap: false,
                                minimize: true
                            }
                        }
                    ]
                })
            },
            {
                test: /\.(sass|scss)$/,
                use: ExtractTextPlugin.extract({
                    publicPath: "../",
                    fallback: "style-loader",
                    use: [
                        {
                            loader: 'css-loader',
                            options: {
                                sourceMap: false,
                                minimize: true,
                                importLoaders:1
                            }
                        },
                        "sass-loader"
                    ]
                })
            },
            {
                test: /\.json$/,
                use: ["json-loader"]
            }
        ]
    },
    resolve: {
        extensions: [".js", ".json", ".jsx"]
    }
};
