const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const isDevMode = process.env.NODE_ENV !== 'production';
const isProdMode = !isDevMode;

module.exports = {
    mode: "development",
    entry: __dirname + '/src/index.tsx',
    output: {
        filename: "bundle.js",
        path: path.resolve(__dirname, 'public'),
        publicPath: '/'
    },
    devServer: {
        contentBase: path.resolve(__dirname, 'public'),
        compress: true,
        port: 9011,
        writeToDisk: true,
        historyApiFallback: true,
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HTMLWebpackPlugin({
            template: __dirname + '/src/index.html',
            minify: {
                collapseWhitespace: isProdMode
            }
        }),
        new MiniCssExtractPlugin({
            filename: "./css/main.css",
            allChunks: false,
            minimize: true,
        }),
        new CleanWebpackPlugin()
    ],
    resolve: {
        extensions: [".ts", ".tsx", ".js", ".jsx"]
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
            {
                test: /\.(sa|sc|c)ss$/,
                use:  [
                    {
                        loader:  MiniCssExtractPlugin.loader,
                        options: {
                            hmr: true,
                            minimize:   true,
                        },
                    },
                    "css-loader",
                    "sass-loader"
                ],
            },
            {
                test:    /\.(jpg|png|svg|ico|gif)$/,
                loader:  'file-loader',
                options: {
                    name: `[name].[ext]`,
                    outputPath: './images/',
                },
            }
        ]
    }
}