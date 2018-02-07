var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
var config = require('./webpack.dev.config');

new WebpackDevServer(webpack(config), {
	contentBase:'example/',
	publicPath: config.output.publicPath,
	hot:true,
	noInfo : false,
	stats: { colors: true },
	historyApiFallback: true
}).listen(3001, 'localhost', function (err, result) {
	if (err) {
		console.log(err);
	}

	console.log('Listening at localhost:3001');
});
