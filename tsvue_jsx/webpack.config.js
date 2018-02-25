const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: {
    bundle: [
      'webpack-dev-server/client?http://localhost:3000/',
      'webpack/hot/dev-server',
      path.resolve(__dirname, 'src/index.tsx')
    ]
  },
  output: {
    filename: '[name].js',
    publicPath: '/'
  },
  plugins:[
  	new webpack.HotModuleReplacementPlugin(), /*HOT熱更新模組插件*/
    new webpack.NamedModulesPlugin(), /* 更新時可以看到更新的檔案名稱*/
    new webpack.SourceMapDevToolPlugin() /*可以在F12看到原始碼*/
  ],
  resolve: {
    // Add '.ts' and '.tsx' as resolvable extensions.
    extensions: [".ts", ".tsx", ".js", ".json"]
  },
  module: {
      rules: [
          // All files with a '.ts' or '.tsx' extension will be handled by 'awesome-typescript-loader'.
          { test: /\.tsx?$/, loader: ["babel-loader","awesome-typescript-loader"] }
          // All output '.js' files will have any sourcemaps re-processed by 'source-map-loader'.
          //{ enforce: "pre", test: /\.js$/, loader: "source-map-loader" }
      ]
  }
};
