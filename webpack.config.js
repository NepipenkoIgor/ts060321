const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
    watch: true,
    mode: 'none',
    entry: path.resolve(__dirname, 'src'),
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    resolve: {
        extensions: ['.js', '.json', '.ts']
    },
    // devtool: 'source-map',
    module: {
        rules: [
            {
                test: /\.ts/, loader: 'ts-loader'
            },
            {
                test: /\.css/, use: ['style-loader','css-loader']
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, 'src', 'index.html')
        })
    ]
}
