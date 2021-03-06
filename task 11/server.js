var http = require('http');
var url = require('url');
var querystring = require('querystring');
var static = require('node-static');
var file = new static.Server('.', {
    cache: 0
});


function accept(req, res) {

    if (req.url == '/info.json') {
        // искусственная задержка для наглядности
        setTimeout(function() {
            file.serve(req, res);
        }, 10);
    } else {
        file.serve(req, res);
    }

}

// ------ запустить сервер -------

if (!module.parent) {
    http.createServer(accept).listen(3000);
} else {
    exports.accept = accept;
}