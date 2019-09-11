const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

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
        contentBase: './dist',
        historyApiFallback: true    // 刷新界面无法显示问题
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                use: 'babel-loader',
                exclude: /node_modules/
            },
            // {
            //     test: /\.css/,
            //     loader: 'style-loader!css-loader?modules'
            // }
            {
                test: /\.(css|less)$/,
                use: [
                {
                    loader:MiniCssExtractPlugin.loader,
                    options:{
                        publicPath: '../'
                    }
                },
                "css-loader",
                  "less-loader"
                ]
            },
            {
                test:/\.(jpg|jpeg|png|pneg|gif|bmp)$/,
                use:[{
                    loader:'url-loader',
                    options:{ 
                        limit:500, // 表示小于500kb的图片转为base64
                        name: 'image/[name].[ext]',
                        // publicPath:'' //定义输出的图片文件夹
                        // outputPath: './',
                        url:false,
                        // publicPath : './'
                    }
                }]
            }
        ]
    },
    plugins: [
　　 　　new HtmlWebpackPlugin({
　　　　 　　template: path.resolve(__dirname, '../src/index.html'),
　　　　　　 inject: true
　　　　 }),
        new MiniCssExtractPlugin({
            filename: "css/[name].css",
            chunkFilename: "[id].css"
        })
　　 ]
}