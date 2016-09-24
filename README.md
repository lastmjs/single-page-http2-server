This is a simple development server built to work with HTTP2 and server rewrites for single page applications. Whenever a static asset is not requested, the server will redirect to `index.html` in the current working directory of the server. A pre-generated SSL key and certificate are included, since this is meant to be a development server run on `localhost`.

# Installation
npm install --save-dev single-page-http2-server

# Usage
The server root is the directory the server is called from.

From the commandline:
```
node_modules/.bin/single-page-http2-server
```

As an NPM script:
```
{
    ...,
    "scripts": {
       "start": "single-page-http2-server"
    },
    ...
}
```

Follow these instructions if you need to regenerate the SSL key or certificate: https://gist.github.com/sl4m/5091803
