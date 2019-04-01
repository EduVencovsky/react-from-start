Create `package.json`

    npm init 

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

Creating Babel config

Create file `.babelrc`

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