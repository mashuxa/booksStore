const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

let config = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, "./dist"),
        filename: "js/main.js",
        publicPath: "dist/"
    },
    devServer: {
        overlay: true
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: "/node_modules/",
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: [
                            "env",
                            "stage-3"
                        ]
                    }
                }
            },
            {
                test: /\.(sa|sc|c)ss$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    // process.env.NODE_ENV !== 'production' ? 'style-loader' : MiniCssExtractPlugin.loader,
                    'css-loader',
                    'postcss-loader',
                    'sass-loader'
                ]
            },
            {
                test: /\.(png|jp(e*)g|svg)$/,
                use: [{
                    loader: 'url-loader',
                    options: {
                        limit: 8000, // Convert images < 8kb to base64 strings
                        name: 'images/[hash]-[name].[ext]',
                        publicPath: '../'
                    }
                }]
            }
        ]
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: './css/style.css'
        })
    ]
};

module.exports = (env, options) => {
    let production = options.mode === "production";
    let minificatorJs = new webpack.optimize.UglifyJsPlugin({
        compress: {
            warnings: false,
            drop_console: true,
            unsafe: true
        }
    });
    if (production) {
        config.plugins.push(minificatorJs);
    }
    config.devtool = production ? false : "eval-sourcemap";
    return config;
};
module.exports = config;