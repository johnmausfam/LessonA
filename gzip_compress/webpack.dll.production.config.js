const path = require('path');
const webpack = require('webpack');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const CompressionPlugin = require("compression-webpack-plugin")

module.exports = {
    entry: {
        vendor: ['react', 'react-dom', 'react-gmaps']
    },
    output: {
        path: path.join(__dirname, './dist/'),
        filename: '[name].dll.[chunkhash].js', /* 輸出檔名，index.html引用 */
        library: '[name]_dll' /* 輸出的命名空間，與下方設定一致 */
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': "'production'"
        }),
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
        }),
        new BundleAnalyzerPlugin({
            analyzerMode:"static",
            reportFilename:"../bundleReport/dll_report.html",
            generateStatsFile:true,
            statsFilename:"../bundleReport/dll_stats.json",
            openAnalyzer:false
        }),
        new CompressionPlugin()
    ],
    resolve: {
        extensions: [".js", ".json", ".jsx"]
    }
};
