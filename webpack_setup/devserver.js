var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
var config = require('./webpack.config');
new WebpackDevServer(webpack(config), {
   contentBase:'dev/', /* dev-server root dir */
   hot: true,
   inline :true,
   lazy: false,
   publicPath: config.output.publicPath, /* entry dir */
   stats: { colors: true }
}).listen(3000, 'localhost', function (err, result) {
    if (err)
        console.log(err);
    console.log('Listening at localhost:3000');
});
