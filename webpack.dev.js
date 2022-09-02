// Для того чтобы достучаться до плагина
const HtmlWebpackPlugin = require('html-webpack-plugin');

// У самого Webpack уже есть встроенные плагины, их неплохо тоже импортировать
const webpack = require('webpack');
const path = require('path');
module.exports = {

    entry: './static/js/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'my-first-webpack.bundle.js',
    },

    module: {
        rules: [{ test: /\.txt$/, use: 'raw-loader' }],
    },

    // Указываем новые плагины для обработки файлов
    plugins: [

        // Указываем что будем обрабатывать HTML с помощью плагина
        new HtmlWebpackPlugin({ template: './src/index.html' })
    ],
};