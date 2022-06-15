const http = require('http'); // importing the http module
const fs = require('fs'); // importing the filesystem module
const path = require('path'); // importing the path module
const PORT = 1337; // the leet port

// creating server and matching routes
const server = http.createServer((req, res) => {
  if ((req.url === '/') | (req.url === '/home.html')) {
    fs.readFile('./home.html', 'UTF-8', function (err, html) {
      res.writeHead(200, { 'Content-Type': 'text/html' });
      res.end(html);
      if (err) {
        throw new err();
      }
    });
  } else if (req.url === '/about.html') {
    fs.readFile('./about.html', 'UTF-8', function (err, html) {
      res.writeHead(200, { 'Content-Type': 'text/html' });
      res.end(html);
      if (err) {
        throw new err();
      }
    });
  } else if (req.url === '/contact.html') {
    fs.readFile('./contact.html', 'UTF-8', function (err, html) {
      res.writeHead(200, { 'Content-Type': 'text/html' });
      res.end(html);
      if (err) {
        throw new err();
      }
    });
  } else if (req.url.match('.css$')) {
    var cssPath = path.join(__dirname, '', req.url);
    var fileStream = fs.createReadStream(cssPath, 'UTF-8');
    res.writeHead(200, { 'Content-Type': 'text/css' });
    fileStream.pipe(res);
  } else {
    res.writeHead(404, { 'Content-Type': 'text/html' });
    res.end('404: <a href="/home.html">Page not found</a>');
  }
});

// listening on the leet port
server.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}`);
});
