Create `package.json`

    npm init 

Create `.gitignore` file
    
    node_modules
    build

Install WebPack packages

    npm i -D webpack
    npm i -D webpack-cli
    npm i -D webpack-dev-server

Install Babel packages

    npm i -D @babel/core
    npm i -D @babel/node
    npm i -D @babel/preset-env
    npm i -D @babel/preset-react
    npm i -D @babel/register
    npm i -D babel-loader

Creating Babel config

Create file `.babelrc`
```json
{
    "presets": [
        [
            "@babel/preset-env", {
                "targets": {
                    "node": "current"
                }
            }
        ],
        "@babel/preset-react"
    ]
}
```

Create `src` folder where all the code will be

Create folder `app` with `index.js` where will be the entry point of the client side

Create `webpack.config.js` file


## [.mode](https://webpack.js.org/configuration/mode/)
Choose mode (e.g. `development` or `production` )
## [.entry](https://webpack.js.org/concepts/entry-points/)
Entry point of your app
## [.devtool](https://webpack.js.org/configuration/devtool)
Choose a style of source mapping to enhance the debugging process.    
> If you are debugging on browser and you can't see the source code, only the bundle code, it's because of the source map type you are using.

## [.output](https://webpack.js.org/configuration/output/)    
* [path](https://webpack.js.org/configuration/output/#outputpublicpath) - Directory where the output file will be
* [filename](https://webpack.js.org/configuration/output/#outputpublicpath) - Name of the output file (e.g. `bundle.js`)    
* [publicPath](https://webpack.js.org/configuration/output/#outputpublicpath) - (e.g. `/`)

## [.resolve](https://webpack.js.org/configuration/resolve/)
* [extensions](https://webpack.js.org/configuration/resolve/#resolveextensions) - Automatically resolve certain extensions when importing. (e.g. `['.js', '.jsx', '.css']`)

## [.plugins](https://webpack.js.org/configuration/plugins)
List of usefull plugins

* HtmlWebpackPlugin
* MiniCssExtractPlugin

Prod Plugins

* UglifyJSPlugin
* webPackBundleAnalyzer

## [.module](https://webpack.js.org/configuration/module)

### [rule](https://webpack.js.org/configuration/module#rule)
* [rule.test](https://webpack.js.org/configuration/module/#ruletest)
    Test the file name to use that rule
* [rule.include](https://webpack.js.org/configuration/module/#ruletest)
    Files that will be used in this rule
* [rule.exclude](https://webpack.js.org/configuration/module/#ruletest)
    Files that won't be used in this rule

* [rule.loader]()


* [rule.use](https://webpack.js.org/configuration/module#ruleuse)
    Choose what loaders to use 
    Common Loaders
    * [`babel-loader`](https://github.com/babel/babel-loader)
    * [`file-loader`](https://github.com/webpack-contrib/file-loader)
    * [`style-loader`](https://github.com/webpack-contrib/style-loader)
    * [`css-loader`](https://github.com/webpack-contrib/css-loader)
    * [`sass-loader`](https://github.com/webpack-contrib/sass-loader)





```javascript
const path = require('path')

module.exports = {
    mode: 'development',
    entry: path.resolve(__dirname, 'src', 'app'),
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'bundle.js',
        publicPath: '/'
    },
    resolve: {
        extensions: ['.js', '.jsx']
    },
    devServer: {
        historyApiFallback: true,
    },
    module: {
        rules: [{
            test: /\.jsx?/,
            loader: 'babel-loader'
        }]
    }
}
```
