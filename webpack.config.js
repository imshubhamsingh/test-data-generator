var path = require("path");
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var webpack = require("webpack");

module.exports ={
    entry: {
        main:'./public/assets/js/app.js'
    },
    output: {
        path: path.join( __dirname,'/public/dist'),
        filename: 'bundle.js',
        sourceMapFilename: 'bundle.js.map'
    },
    resolve:{
         alias: {
             "custom-scss" : path.join(__dirname,"public/assets/scss/app.scss"),
             "materialize-css-file" : path.join(__dirname,"node_modules/materialize-css/bin/materialize.css"),
             "logo": path.join(__dirname,"public/assets/img/dg.svg"),
             "vue$": path.join(__dirname,'node_modules/vue/dist/vue')
        }
    },
    module:{
        rules:[
            {
                test: /\.vue$/,
                loader: 'vue-loader',
                options: {
                    loaders:{
                        'scss': 'vue-style-loader!css-loader!sass-loader',
                        'sass': 'vue-style-loader!css-loader!sass-loader?indentedSyntax'
                    }
                }
            },
            {
                test:/\.(scss|css)$/,
                loaders:ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: ['css-loader','sass-loader'],
                    publicPath: './public/dist'

                })
            },
            {
                test: /\.(jpg|png|svg)$/,
                loader: 'file-loader',
                options: {
                    name: './img/[name].[ext]'
                }
            },
            {
                test: /\.(woff|woff2)$/,
                loader: 'url-loader?limit=100000',
                options:{
                    name: './fonts/[name].[ext]'
                }
            },
            {
                test: /\.(ttf|eot)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                loader: "file-loader?limit=100000",
                options:{
                    name: './fonts/[name].[ext]'
                }
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
                collapseWhitespace: true
            },
            hash: true,
            template: './public/assets/index.html'
        }),
        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery'
        }),
        new webpack.optimize.UglifyJsPlugin({
            sourceMap: true,
            compress: {
                warnings: false
            }
        }),
        new webpack.LoaderOptionsPlugin({
            minimize: true
        })
    ]
};