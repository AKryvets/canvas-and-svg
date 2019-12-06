let path = require("path");

module.exports = {
   // watch: true,
    mode : "development",
    entry: {
        'init': './clocks-svg/init.js',
    },
    output: {
        path: path.resolve(__dirname, "./clocks-svg/build"),
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
}