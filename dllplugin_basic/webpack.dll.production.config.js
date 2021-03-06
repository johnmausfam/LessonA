const path = require('path');
const webpack = require('webpack');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
module.exports = {
    entry: {
        vendor: ['react', 'react-dom', 'antd', 'react-gmaps']
    },
    output: {
        path: path.join(__dirname, './dist/'),
        filename: '[name].dll.js', /* 輸出檔名，index.html引用 */
        library: '[name]_dll' /* 輸出的命名空間，與下方設定一致 */
    },
    plugins: [
        new webpack.DllPlugin({
            path: path.join(__dirname, '.', '[name]-manifest.json'),
            name: '[name]_dll'
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
    resolve: {
        extensions: [".js", ".json", ".jsx"]
    }
};
