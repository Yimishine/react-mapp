const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: path.resolve(__dirname,'../src/index.js'),
    output: {
        path: path.resolve(__dirname,'../dist'),
        filename: 'app/[name].js'
    },
    mode: 'development',
    devServer: {
        inline: true,
        port: '8082',
        //  contentBase: path.resolve(__dirname,'../dist'),
        // historyApiFallback: true    // 刷新界面无法显示问题
        // proxy: {
        //     '/api': 'http://102.03.34.58/api'
        // },
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                use: 'babel-loader',
                exclude: /node_modules/
            },
            {
                test: /\.(css|less)$/,
                use: ["style-loader","css-loader","less-loader"],
                exclude: /node_modules/
            },
            {
                test:/\.(jpg|jpeg|png|pneg|gif|bmp)$/,
                exclude: /node_modules/,
                use:[{
                    loader:'url-loader',
                    options:{ 
                        limit: 500,   //是把小于500B的文件打成Base64的格式，写入JS
                        name: 'image/[name].[ext]',
                        
                    }
                }]
            },

        ]
    },
    plugins: [
        　　 　　new HtmlWebpackPlugin({
        　　　　 　　template: path.resolve(__dirname, '../src/index.html'),
        　　　　　　 inject: true
        　　　　 })
        　　 ]
}