const fs = require('fs');

// HTML content
const htmlContent = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>New Page</title>
</head>
<body>
  <h1>Welcome to the New Page</h1>
  <p>This is a newly generated HTML file.</p>
</body>
</html>
`;

// Write HTML content to file
fs.writeFile('new_page.html', htmlContent, (err) => {
  if (err) {
    console.error('Error writing HTML file:', err);
  } else {
    console.log('HTML file successfully created: new_page.html');
  }
});
