const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname,'dist'),
        filename: 'bundle.js'
    },
    mode: 'development',
    resolve: {
        extensions: [ '.js', '.jsx'],
        alias: {
            '@components': path.resolve(__dirname, 'src/components/'),
            '@styles': path.resolve(__dirname, 'src/styles/'),
            '@css': path.resolve(__dirname, 'src/assets/css'),
            '@vendors': path.resolve(__dirname, 'src/assets/vendors'),
            '@fonts': path.resolve(__dirname, 'src/assets/fonts'),
            '@images': path.resolve(__dirname, 'src/assets/images'),
            '@js': path.resolve(__dirname, 'src/assets/js'),
            '@assets': path.resolve(__dirname, 'src/assets/'),
           
        }
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use:{
                    loader: 'babel-loader'
                }
            },
            {
                test: /\.html$/,
                use: {
                    loader: 'html-loader'
                }
            },
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader',
                    'sass-loader'
                ],
                exclude: "/public/assets"
            },
            
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './public/index.html',
            filename: 'index.html'
        }),
    ],
    devServer: {
        static: {
            directory: path.join(__dirname, 'dist'),
        },
        compress: true,
        port: 8081
    }
}