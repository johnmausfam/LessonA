const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
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
        new webpack.NamedModulesPlugin(), /* 更新時可以看到更新的檔案名稱*/
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': "'production'"
        }),
        new webpack.optimize.UglifyJsPlugin({
            sourceMap: false,
            compress: {
                warnings: false,
                drop_console: false
            }
        }),
        new ExtractTextPlugin({
            filename: "css/[name].css"
        }),
        new webpack.DllReferencePlugin({
            manifest: require('./vendor-manifest.json')
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
                            outputPath:"images/",
                            limit: 8139
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
                                sourceMap: false
                            }
                        }
                    ]
                })
            },
            {
                test: /\.(sass|scss)$/,
                use: ExtractTextPlugin.extract({
                    publicPath:"../",
                    fallback: "style-loader",
                    use: [
                        {
                            loader: 'css-loader',
                            options: {
                                sourceMap: false
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
