var path = require('path');
var webpack = require('webpack');

var config = {
    entry: {
        bundle:[
            'react-hot-loader/patch',
            'webpack-dev-server/client?http://localhost:3001',
            'webpack/hot/only-dev-server',
            path.resolve(__dirname, 'example/index.jsx')
        ],
        vendor:[
            path.resolve(__dirname, 'src/lib/Matisse.js')
        ]
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NamedModulesPlugin(),
        new webpack.SourceMapDevToolPlugin(),
        new webpack.DefinePlugin({
            VERSION: JSON.stringify(require("./package.json").version),
            'process.env.NODE_ENV': JSON.stringify('development')
        }),
        new webpack.optimize.CommonsChunkPlugin({
            name: "vendor",
            minChunks: Infinity
        }),
    ],
    output: {
        filename: '[name].js',
        publicPath: '/'
    },
    module: {
        loaders: [
            {
                test: /\.(js|jsx)$/, 
                loaders: ['babel-loader'],
                include: [path.join(__dirname, 'src'),path.join(__dirname, 'example')],
                exclude: [path.resolve(__dirname, 'node_modules'),path.resolve(__dirname, 'src/lib')]
            },
            {   test: /\.css$/,
                loader: [
                    "style-loader",
                    {
                        loader: 'css-loader',
                        options: {
                            sourceMap: true
                        }
                    }
                ]
            },
            { test: /\.(sass|scss)$/, loader: [
                "style-loader",
                {
                    loader: 'css-loader',
                    options: {
                        sourceMap: true
                    }
                },
                "sass-loader"
            ]},
            {
                test: /\.(svg|png|jpeg|jpg|gif)$/,
                use: [
                    "file-loader"
                ]
            }
        ]
    },
    resolve: {
        extensions: [".js",".json",".jsx"]
    }
};

module.exports = config;