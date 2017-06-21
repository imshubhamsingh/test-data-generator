var path = require("path");
var NODE_MODULES = path.join(__dirname,"node_modules");
var PUBLIC = path.join(__dirname,"public");
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports ={
    entry: {
        main:'./config.js',
        'bundle.min.css': [
            __dirname + '/public/assets/css/app.css',
            __dirname + '/node_modules/materialize-css/bin/materialize.css'
        ]
    },
    output: {
        path: __dirname+'/public/assets/lib',
        filename: 'bundle.js'
    },
    resolve:{
         alias: {
            "custom-css" : path.join(__dirname,"/public/assets/css/app.css"),
            "materialize-css-file" : path.join(__dirname,"/node_modules/materialize-css/bin/materialize.css")
        }
    },
    module:{
        loaders: [
            {
                test: /\.css$/i,
                loader: ExtractTextPlugin.extract({ fallback: 'style-loader', use: 'css-loader' })
            },
            {
                test: /\.(png|woff|woff2)$/,
                loader: 'url-loader?limit=100000'
            },
            {
                test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                loader: "file"
            }
        ]
    },
    plugins: [
        new ExtractTextPlugin("styles.css")
    ]
};