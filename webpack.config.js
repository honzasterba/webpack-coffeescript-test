const path = require('path');

module.exports = {
    mode: "development",
    entry: './example.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    devServer: {
        contentBase: './dist'
    },
    module: {
        rules: [
            {
                test: /\.coffee$/,
                loader: "coffee-loader",
                options: {literate: true}
            }
        ]
    },
    resolve: {
        extensions: [".coffee", ".js"]
    }
};
