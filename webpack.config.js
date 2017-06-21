var path = require("path");
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports ={
    entry: {
        main:'./config.js'
    },
    output: {
        path: __dirname+'/public/dist',
        filename: 'bundle.js'
    },
    resolve:{
         alias: {
            "custom-scss" : path.join(__dirname,"/public/assets/scss/app.scss"),
            "materialize-css-file" : path.join(__dirname,"/node_modules/materialize-css/bin/materialize.css")
        }
    },
    module:{
        rules:[
            {
                test:/\.(scss|css)$/,
                loaders:ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: ['css-loader','sass-loader'],
                    publicPath: './public/dist'

                })
            },
            {
                test: /\.(png|woff|woff2)$/,
                loader: 'url-loader?limit=100000'
            },
            {
                test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                loader: "file-loader?limit=100000"
            }
        ]
    },
    plugins: [
        new ExtractTextPlugin({
            filename:"app.css",
            disable: false,
            allChunks: true
        }),
         new HtmlWebpackPlugin({
            title:'Data Generator',
            minify:{
                collapseWhitespace: false
            },
            hash: true,
            template: './public/assets/index.html'
        })
    ]
};