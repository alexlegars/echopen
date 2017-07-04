var webpack = require('webpack');

module.exports = {
    entry: {
        "main": "./src/main.js"
    },
    output: {
        filename: "[name].js",
        publicPath: "/js/"
    },
    resolve: {
        alias: {
            // Alias
            'config': __dirname + '/src/config',
            'components': __dirname + '/src/components/',
            'actions': __dirname + '/src/actions/',
            'stores': __dirname + '/src/stores/',
            'signals': __dirname + '/src/signals/',
            'tools': __dirname + '/src/bundles/tools',

            // Libs
            'dan': __dirname + '/src/bundles/dan',
            'sine-wave': __dirname + '/node_modules/sine-waves/sine-waves.min.js',
            'events': __dirname + '/node_modules/events/events.js',
            'async': __dirname + '/node_modules/async/lib/async.js',
            '_': __dirname + '/node_modules/lodash/index.js',
            'react': __dirname + '/node_modules/react/dist/react.min.js',
            'react-dom': __dirname + '/node_modules/react-dom/dist/react-dom.min.js',
            'page': __dirname + '/node_modules/page/page.js',
            'gsap': __dirname + '/node_modules/gsap/src/uncompressed/TweenMax.js',
            'webfont': __dirname + '/node_modules/webfontloader/webfontloader.js',
            'alt/utils': __dirname + '/node_modules/alt/utils/',
            'alt': __dirname + '/node_modules/alt/dist/alt.js',
            'signal': __dirname + '/node_modules/signals/dist/signals.js',
            'fetch' : __dirname + '/node_modules/whatwg-fetch/fetch.js'
        }
    },
    plugins: [
        new webpack.ProvidePlugin({
            'fetch': 'imports?this=>global!exports?global.fetch!whatwg-fetch'
        })
    ],
    module: {
        loaders: [
            {
                test: /\.json$/,
                loader: "json"
            },
            {
                test: /\.scss/,
                loader: "style!css!sass!postcss"
            },
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loader: 'babel',
                query: {
                    presets: ['react', 'es2015', 'stage-1'],
                    plugins: [
                        'transform-decorators-legacy', [
                            'transform-es2015-classes', {
                                loose: true
                            }
                        ]
                    ]
                }
            }
        ],
        noParse: [
            __dirname + '/node_modules/react/dist/react.min.js',
            __dirname + '/node_modules/page/page.js'
        ]
    },
    postcss: [
        require('autoprefixer')
    ],
    devtool: ''
};