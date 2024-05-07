const http = require('http');
const fs = require('fs');
const path = require('path');

const directoryPath = './html_files';

const server = http.createServer((req, res) => {
  fs.readdir(directoryPath, (err, files) => {
    if (err) {
      res.writeHead(500, {'Content-Type': 'text/plain'});
      res.end('Internal Server Error');
      console.error('Error reading directory:', err);
      return;
    }

    let imgTagsCounts = [];

    files.forEach(file => {
      if (path.extname(file) === '.html') {
        const filePath = path.join(directoryPath, file);
        const fileContent = fs.readFileSync(filePath, 'utf8');
        const imgTagsCount = (fileContent.match(/<img/g) || []).length;
        imgTagsCounts.push({ file, imgTagsCount });
      }
    });

    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write('<html><head><title>Number of <img> tags</title></head><body>');
    imgTagsCounts.forEach(({ file, imgTagsCount }) => {
      res.write(`<p>File: ${file}, Number of &lt;img&gt; tags: ${imgTagsCount}</p>`);
    });
    res.end('</body></html>');
  });
});

const PORT = 8080;
server.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
