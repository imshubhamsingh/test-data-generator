var path = require("path");
var NODE_MODULES = path.join(__dirname,"node_modules");
var PUBLIC = path.join(__dirname,"public");

module.exports ={
    entry: {
        main:'./config.js'
    },
    output: {
        path: __dirname+'/public/assets/lib',
        filename: 'bundle.js'
    },
    resolve:{
        extensions: ['*', '.js','.css'],
        modules: [NODE_MODULES ,PUBLIC],
        alias: {
            "custom-css" : path.join(__dirname,"/public/assets/css/app.css"),
            "materialize-css-file" : path.join(__dirname,"materialize-css/bin/materialize.css")
        }
    },
    module:{
        loaders: [
            { test: /\.css$/, loader: "style-loader!css-loader!",include: __dirname + '/node_modules' },
            { test: /\.(png|woff|woff2)$/, loader: 'url-loader?limit=100000' },
            { test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: "file" }
        ]
    }
};