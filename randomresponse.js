module.exports = function (context, req, res) 
{
    var log4js = require('log4js');
    var logger = log4js.getLogger();
    
    var responses = [
        {"code":200,"text":"200 - OK"},
        {"code":302,"text":"302 - Found"},
        {"code":400,"text":"400 - Bad Request"},
        {"code":401,"text":"401 - Unauthorized"},
        {"code":403,"text":"403 - Forbidden"},
        {"code":404,"text":"404 - Not Found"},
        {"code":418,"text":"418 - I'm a teapot"},
        {"code":500,"text":"500 - Internal Server Error"},
        {"code":503,"text":"503 - Service Unavailable"}
    ];
    
    var response = responses[ Math.floor( Math.random() * responses.length ) ];

    logger.debug(response.text);

    res.writeHead( response.code, { 'Content-Type': 'text/html' });
    res.end( '<h1>' + response.text + '</h1>' );
}