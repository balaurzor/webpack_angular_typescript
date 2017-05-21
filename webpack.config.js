const HtmlWebpackPlugin = require('html-webpack-plugin');
const ScriptExtHtmlWebpackPlugin = require('script-ext-html-webpack-plugin');

module.exports = {
    entry: {
        app: ['./src/main.module.ts']
    },
    output: {
        filename: "index.[hash].js"
    },
    // Currently we need to add '.ts' to the resolve.extensions array.
    resolve: {
        extensions: ['.ts', '.tsx', '.js']
    },

    // Source maps support ('inline-source-map' also works)
    devtool: 'source-map',

    // Add the loader for .ts files.
    module: {
        loaders: [{
            exclude: /node_modules/,
            test: /\.tsx?$/,
            loader: 'ts-loader',
            options: {
                transpileOnly: true
            }
        }, {
            test: /\.js$/,
            loader: 'babel-loader',
            include: /src/,
            query: {
                presets: ["es2015"]
            }
        }]
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: 'index.template.html',
            cache: false,
            hash: true
        }),

        new ScriptExtHtmlWebpackPlugin({
            //defaultAttribute: 'async'
        })
    ],
    devtool: 'inline-source-map',
};
