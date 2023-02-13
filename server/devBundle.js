// This file will help compile the React code using Webpack
// while in development mode

import webpack from 'webpack'
import WebpackHotMiddleware from 'webpack-hot-middleware'
import WebpackHotMiddleware from 'webpack-hot-middleware'
import webpackConfig from './../webpack.config.client.js'

const compile = (app) => {
    if(process.env.NODE_ENV === 'development') {
        const compiler = webpack(webpackConfig)
        const middleware = webpackMiddleware(compiler, {
            publicPath: webpackConfig.output.publicPath
        })
        app.use(middleware)
        app.use(WebpackHotMiddleware(compiler))
    }
}

export default {
    compile
}
