//https://medium.com/paloit/a-beginners-guide-to-micro-frontends-with-webpack-module-federation-712f3855f813
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');

const port = 8081;
module.exports = {
    mode: 'development',
    output: {
        publicPath: `http://localhost:${port}/`,
    },
    devServer: {
        port: port,
        historyApiFallback: true,
    },
    module: {
        rules: [
            {
                test: /\.m?js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-react', '@babel/preset-env'],
                        plugins: ['@babel/plugin-transform-runtime'],
                    },
                },
            },
            {
                test: /\.(png|jpg|jpeg|gif)$/i,
                type: "asset/resource",
            },
            {
                test: /\.css$/i,
                use: ["style-loader", "css-loader"],
            },
        ],
    },
    plugins: [
        new ModuleFederationPlugin({
            name: 'reactapp',
            filename: 'remoteEntry.js',
            exposes: {
                './ReactApp': './src/index',
            },
        }),
        new HtmlWebpackPlugin({
            template: './public/index.html',
        }),
    ],
};