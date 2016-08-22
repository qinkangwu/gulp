var webpack = require('webpack');
module.exports = {
    entry: [
         './entry.js'
    ],
    output: {
        path: __dirname,
        filename: 'bundle.js'
    },
module: {
    loaders: [
        {test:/\.css$/,loader:'style!css'},
        {test:/\.(png|jpg)$/,loader:'url'},
        {test:/\.js?$/,loader:'babel',exclude : /node_modules/ , query : {compact:false,presets : ['es2015']}}
        ]
    },
plugins: [
        new webpack.BannerPlugin('//kevin\'s Demo'),
        new webpack.optimize.CommonsChunkPlugin('common.js')
    ]
};