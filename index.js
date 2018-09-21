var express = require('express');
const path = require('path');
var proxy = require('http-proxy-middleware');
const startPort = require('./config/prePath')['port']
const prePath = require('./config/prePath')['prePath']

// proxy middleware options
var options = {
    target: prePath['path'], // target host
    changeOrigin: true,               // needed for virtual hosted sites
    ws: true,                         // proxy websockets
    pathRewrite: {
        '^/path' : '',     // rewrite path
        '^/path2' : '/grab',     // rewrite path2
    }
};
// create the proxy (without context)
var exampleProxy = proxy(options);

// mount `exampleProxy` in web server
var app = express();

app.use(['/path','/path2'], exampleProxy);

app.use(express.static(path.join(__dirname,'./dist')))

app.listen(startPort, () => {
    console.log(`[demo] static-use-middleware is starting at port ${startPort}`)
})