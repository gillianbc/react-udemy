const path = require('path')
// See webpack.js.org for explanations
// e.g. https://webpack.js.org/configuration/devtool/#devtool
module.exports = {
    entry: './src/app.js',
    output: {
        path: path.join(__dirname, 'public'),
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                loader: 'babel-loader',
                test: /\.js$/,
                exclude: /node_modules/
            }
        ]
    },
    devtool: "eval-cheap-module-source-map"
}
