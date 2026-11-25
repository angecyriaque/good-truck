const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = 3000;
const HOST = '0.0.0.0';

const server = http.createServer((req, res) => {
  let reqPath = req.url.split('?')[0];
  if (reqPath === '/' || reqPath === '') {
    reqPath = '/good-truck.html';
  }
  const filePath = path.join(__dirname, reqPath);
  if (fs.existsSync(filePath) && fs.statSync(filePath).isFile()) {
    const ext = path.extname(filePath).toLowerCase();
    const contentType = ext === '.html' ? 'text/html; charset=utf-8' :
                        ext === '.js' ? 'application/javascript; charset=utf-8' :
                        ext === '.css' ? 'text/css; charset=utf-8' :
                        ext === '.json' ? 'application/json' :
                        ext === '.png' ? 'image/png' :
                        ext === '.avif' ? 'image/avif' :
                        'text/plain; charset=utf-8';
    res.writeHead(200, {
      'Content-Type': contentType,
      'Cache-Control': 'no-cache, no-store, must-revalidate',
      'Access-Control-Allow-Origin': '*'
    });
    fs.createReadStream(filePath).pipe(res);
  } else {
    res.writeHead(404, { 'Content-Type': 'text/plain; charset=utf-8' });
    res.end('Fichier non trouvé');
  }
});

server.listen(PORT, HOST, () => {
  console.log(`GoodTruck server running at http://localhost:${PORT}/ and http://${HOST}:${PORT}/`);
});
