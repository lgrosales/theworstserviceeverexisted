module.exports = function (context, req, res) 
{
    /* 200, 302, 400, 401, 403, 404, 500, 503 */
    res.writeHead(200, { 'Content-Type': 'text/html '});
    res.end('<h1>Hello, world!</h1>');
}