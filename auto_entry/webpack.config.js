const path = require('path');
const glob = require('glob');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const insertToEntry = ['react-hot-loader/patch','webpack-dev-server/client?http://localhost:3000/','webpack/hot/dev-server'];
const entryPatt = "src/*.jsx";

function autoEntry(){
    let entries = {},htmlPlugin=[];
    console.log("find entries:" + entryPatt);

    var files = glob.sync(entryPatt);
    console.log("found files:" + files.length);
    for (var i = 0; i < files.length; i++) {
        var file = files[i];
        
        var keyName = path.basename(file, path.extname(file));
        var entry = [].concat(insertToEntry);
        entry.push(path.resolve(__dirname, file));
        entries[keyName] = entry;

        htmlPlugin.push(new HtmlWebpackPlugin({
            filename: keyName + '.html',
            template: './htmltmpl/index.html',
            chunks: [keyName]
        }));
        
        console.log("finded entry:" + keyName+",from file:" + file);
    }

    console.log("total entry count:" +  files.length);
    return { entry:entries, htmlPlugin:htmlPlugin};
}

var entries = autoEntry();

const plugins = [
    new webpack.HotModuleReplacementPlugin(), /*HOT熱更新模組插件*/
    new webpack.NamedModulesPlugin(), /* 更新時可以看到更新的檔案名稱*/
    new webpack.SourceMapDevToolPlugin() /*可以在F12看到原始碼*/
];

module.exports = {
    entry:entries.entry,
    output: {
        filename: '[name].js',
        publicPath: '/' /*build好的entry的JS會在這邊,因為react-hot-loader限制必須為"/" */
    },
    plugins: plugins.concat(entries.htmlPlugin),
    module: {
        rules: [
            { test: /\.(js|jsx)$/, exclude: /node_modules/, loader: "babel-loader" },
            {
                test: /\.(svg|png|jpeg|jpg|gif)$/,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 1
                        }
                    }
                ]
            },
            {
                test: /\.css$/, loader: [
                    "style-loader",
                    {
                        loader: 'css-loader',
                        options: {
                            sourceMap: true
                        }
                    }
                ]
            },
            {
                test: /\.(sass|scss)$/, loader: [
                    "style-loader",
                    {
                        loader: 'css-loader',
                        options: {
                            sourceMap: true
                        }
                    },
                    "sass-loader"
                ]
            },
            {
                test: /\.json$/,
                use: ["json-loader"]
            }
        ]
    },
    resolve: {
        extensions: [".js", ".json", ".jsx"] /*import可不加附檔名*/
    }
};
