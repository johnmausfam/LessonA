const path = require('path');
const webpack = require('webpack');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
    entry: {
        bundle: [
            path.resolve(__dirname, 'src/index.jsx')
        ]
    },
    output: {
        path:path.resolve(__dirname, './dist/'),
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
        })
    ],
    module: {
        rules: [
            { test: /\.(js|jsx)$/, exclude: /node_modules/, loader: "babel-loader" },
            {
                test: /\.(svg|png|jpeg|jpg|gif)$/,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 1
                        }
                    }
                ]
            },
            {
                test: /\.css$/, loader: [
                    "style-loader",
                    {
                        loader: 'css-loader',
                        options: {
                            sourceMap: false,
                            minimize: true
                        }
                    }
                ]
            },
            {
                test: /\.(sass|scss)$/, loader: [
                    "style-loader",
                    {
                        loader: 'css-loader',
                        options: {
                            sourceMap: false,
                            minimize: true,
                            importLoaders: 1
                        }
                    },
                    "sass-loader"
                ]
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
