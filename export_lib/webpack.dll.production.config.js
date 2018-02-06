const path = require('path');
const webpack = require('webpack');

module.exports = {
    entry: {
        vendor: ['react', 'react-dom', 'antd', 'react-gmaps']
    },
    output: {
        path: path.join(__dirname, './dist/'),
        filename: '[name].dll.[chunkhash].js', /* 輸出檔名，index.html引用 */
        library: '[name]_dll' /* 輸出的命名空間，與下方設定一致 */
    },
    plugins: [
        new webpack.DllPlugin({
            path: path.join(__dirname, '.', '[name]-manifest.json'),
            name: '[name]_dll'
        }),
        new webpack.optimize.UglifyJsPlugin({
            sourceMap: false,
            compress: {
                warnings: false,
                drop_console: true
            }
        })
    ],
    resolve: {
        extensions: [".js", ".json", ".jsx"]
    }
};
