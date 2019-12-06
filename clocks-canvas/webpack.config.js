let path = require("path");

module.exports = {
    mode: 'development',
    watch: true,
    entry: {
        'init': './clock-canvas/init.js',
    },
    output: {
        path: path.resolve(__dirname, "./clock-canvas/build"),
        filename: 'main.js',
        publicPath: ""
    },
    module: {
        rules: [
            {
                test: /\.less$/,
                use: [
                    {
                        loader: 'style-loader',
                    },
                    {
                        loader: 'css-loader',
                    },
                    {
                        loader: 'less-loader',
                        options: {
                            paths: [path.resolve(__dirname, 'node_modules')],
                        },
                    },
                ]
            },
        ]
    },
};