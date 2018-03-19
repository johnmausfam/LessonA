const path = require('path');
const webpack = require('webpack');

module.exports = {
    entry: {
        bundle: [
            path.resolve(__dirname, 'example.js')
        ]
    },
    output: {
        path:path.resolve(__dirname, './dist/'),
        filename: '[name].js'
    }
};
