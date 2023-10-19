const HtmlWebpackPlugin = require('html-webpack-plugin');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const path = require("path");
const webpack = require('webpack');

const port = 8080
module.exports = {
    entry: ['./src/index.tsx'],
    output: {
        filename: "main.[contenthash].js",
        clean: true,
        path: path.resolve(__dirname, "build"),
        publicPath: '/',
    },
    module: {
        rules: [
            // `js` and `jsx` files are parsed using `babel`
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: ["babel-loader"],
            },
            // `ts` and `tsx` files are parsed using `ts-loader`
            {
                test: /\.(ts|tsx)$/,
                loader: "ts-loader"
            },
            // Styles: Inject CSS into the head with source maps
            {
                test: /\.(css)$/,
                use: [
                    'style-loader',
                    { loader: 'css-loader', options: { sourceMap: true, importLoaders: 1 } }
                ],
            },
            {
                test: /\.(png|jpg|jpeg|gif)$/i,
                type: "asset/resource",
            }
        ],
    },
    resolve: {
        extensions: ["*", ".js", ".jsx", ".ts", ".tsx"],
    },
    devServer: {
        static: {
            directory: path.join(__dirname, "public"),
        },
        port: port,
        historyApiFallback: true,
        open: true,
    },
    plugins: [
        new ModuleFederationPlugin({
            name: 'host',
            remotes: {
                reactapp: 'reactapp@http://localhost:8081/remoteEntry.js',
                vueapp: 'vueapp@http://localhost:8082/remoteEntry.js'
            },
        }),
        new HtmlWebpackPlugin({
            template: path.join(__dirname, "public", "index.html"),
        }),
        new webpack.DefinePlugin({
            'process.env': JSON.stringify(process.env)
        }),
    ],
};