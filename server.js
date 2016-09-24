const fs = require('fs');
const static = require('node-static');

const options = {
    key: fs.readFileSync('./localhost.key'),
    cert: fs.readFileSync('./localhost.cert')
};

const file = new static.Server(process.cwd());

require('http2').createServer(options, (req, res) => {
    req.addListener('end', () => {
        file.serve(req, res, (error, result) => {
            if (error && error.status === 404) {
                file.serveFile(`${process.cwd()}/index.html`, 200, {}, req, res);
            }
        });
    }).resume();
}).listen(8000, (error) => {

    if (error) {
        console.log(error);
    }
    else {
        console.log('http2 server listening on port 8000');
    }
});
