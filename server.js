var connect = require('connect');
var serveStatic = require('serve-static');

var app = connect();

app.use(serveStatic ('/client', {'index': ['fortune.html', 'fortune.htm']}));
app.listen(process.env.PORT);
next();

app.use(serveStatic ('/client', {'index': ['horoscope.html', 'horoscope.htm']}));
app.listen(process.env.PORT);
next();
  
app.use(function onerror(err, req, res, next) {
  // an error occurred! 
});

var server = app.listen(process.env.PORT, process.env.IP);

var server = http.createServer(app);