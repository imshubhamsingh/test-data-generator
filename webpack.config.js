module.exports ={
    entry: {
        main:'./config.js'
    },
    output: {
        path: __dirname+'/public/assets/lib',
        filename: 'bundle.js'
    },
    resolve:{

    },
    module:{
        loaders: [
            { test: /\.css$/, loader: "style-loader!css-loader!" },
            { test: /\.(png|woff|woff2)$/, loader: 'url-loader?limit=100000' },
            { test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: "file" }
        ]
    }
};