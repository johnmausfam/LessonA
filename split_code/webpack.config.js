const path = require('path');
const webpack = require('webpack');

module.exports = {
    entry: {
        bundle: [
            'react-hot-loader/patch',
            'webpack-dev-server/client?http://localhost:3000/', /*包進去就不用在index.html中引用 */
            'webpack/hot/dev-server', /* HOT熱更新模組 */
            path.resolve(__dirname, 'src/index.jsx')
        ]
    },
    output: {
        filename: '[name].js',
        publicPath: '/' /*build好的entry的JS會在這邊,因為react-hot-loader限制必須為"/" */
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(), /*HOT熱更新模組插件*/
        new webpack.NamedModulesPlugin(), /* 更新時可以看到更新的檔案名稱*/
        new webpack.SourceMapDevToolPlugin() /*可以在F12看到原始碼*/
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
                            sourceMap: true
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
        extensions: [".js", ".json", ".jsx"] /*import可不加附檔名*/
    }
};
