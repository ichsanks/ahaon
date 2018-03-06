const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const path = require('path');

module.exports = {   
    plugins: [
        new HtmlWebpackPlugin({
            hash: false,
            template: './src/index.html'
        }),
        new webpack.HotModuleReplacementPlugin()
    ],
    devServer: {
        hot: true,
        progress: true,
        inline: true,
        historyApiFallback: true,
        contentBase: './src'
    },
    module: {
        rules: [
            {
                test: /\.(js)$/, 
				exclude: /node_modules/,
				use: 'babel-loader'
            },
            {
                test: /\.scss$/,
				use: ['style-loader','css-loader', 'sass-loader']
            }
        ]
    }
}