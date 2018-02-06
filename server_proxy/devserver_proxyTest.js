var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
var config = require('./webpack.proxytest.config');
new WebpackDevServer(webpack(config), {
    contentBase: 'dev/', /* dev-server root dir */
    hot: true,
    inline: true,
    lazy: false,
    publicPath: config.output.publicPath, /* entry dir */
    stats: { colors: true },
    proxy: [
        {
            context: ['/api'],
            target: "http://localhost:3010",
            changeOrigin: true, //修改Header中的Origin
            pathRewrite: function (url, req, options) {
                console.log(req.url);
                req.url = req.url;
            }
        }
    ]
}).listen(3000, 'localhost', function (err, result) {
    if (err)
        console.log(err);
    console.log('Listening at localhost:3000');
});
