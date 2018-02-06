const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
module.exports = {
    entry: {
        bundle: [
            path.resolve(__dirname, 'src/index.jsx')
        ],
        bundle2: [
            path.resolve(__dirname, 'src/index2.jsx')
        ],
        vendor:['react','react-dom','antd','react-gmaps']
    },
    output: {
        path: path.resolve(__dirname, './dist_test2/'),
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
            filename: "css/[name].css",
            allChunks:true
        }),
        new webpack.optimize.CommonsChunkPlugin({
            name: ["commons","vendor"],
            filename: "[name].js"
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
                                importLoaders:false
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
