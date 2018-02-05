const path = require('path');
const webpack = require('webpack');

module.exports = {
    entry: {
        bundle: [
            path.resolve(__dirname, 'src/index.jsx')
        ]
    },
    output: {
        path:path.resolve(__dirname, './dist/'),
        filename: '[name].js',
        publicPath: '/'
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
                            url:false,
                            sourceMap: false
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
                            url:false,
                            sourceMap: true
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
