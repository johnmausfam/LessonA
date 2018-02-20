const path = require('path');
const webpack = require('webpack');

module.exports = {
    entry: {
        Mylib: [
            path.resolve(__dirname, './src/Mylib.js')
        ]
    },
    output: {
        path:path.resolve(__dirname, './dist_lib/'),
        filename: '[name].js',
        library: 'Mylib',
        libraryTarget: 'umd'
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
            { test: /\.(js|jsx)$/, exclude: /node_modules/, loader: "babel-loader" }
        ]
    },
    resolve: {
        extensions: [".js", ".json", ".jsx"]
    }
    /*,externals: {
        react: 'react'
    }*/
};
