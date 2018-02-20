const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackIncludeAssetsPlugin = require('html-webpack-include-assets-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
module.exports = {
    entry: {
        bundle: [
            path.resolve(__dirname, 'src/index.jsx')
        ]
    },
    output: {
        path: path.resolve(__dirname, './dist/'),
        filename: '[name].[chunkhash].js'
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': "'production'"
        }),
        new webpack.optimize.UglifyJsPlugin({
            sourceMap: false,
            compress: {
                warnings: false,
                drop_console: true
            }
        }),
        new ExtractTextPlugin({
            filename: "css/[name].[hash].css"
        }),
        new webpack.DllReferencePlugin({
            manifest: require('./vendor-manifest.json')
        }),
        new HtmlWebpackPlugin({
            title: 'Sport Place!',
            filename: 'index.html',
            template: './htmltmpl/index.html',
            chunks: ['bundle']
        }),
        new HtmlWebpackIncludeAssetsPlugin({
            assets: [{ path: './', glob: 'vendor.dll.*.js' }],
            append: false
        }),
        new BundleAnalyzerPlugin({
            analyzerMode:"static",
            reportFilename:"../bundleReport/proj_report.html",
            generateStatsFile:true,
            statsFilename:"../bundleReport/proj_stats.json",
            openAnalyzer:false
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
                            name: '[name][hash].[ext]',
                            outputPath: "images/",
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
                                sourceMap: false,
                                importLoaders:1
                            }
                        },
                        "postcss-loader"
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
                                importLoaders:2
                            }
                        },
                        "postcss-loader",
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
