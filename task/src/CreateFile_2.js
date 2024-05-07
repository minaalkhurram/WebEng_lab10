const fs = require('fs');
const readline = require('readline');


const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


function generateHTML(title, content) {
  return `
    <!DOCTYPE html>
    <html>
    <head>
      <title>${title}</title>
    </head>
    <body>
      <h1>${title}</h1>
      <p>${content}</p>
    </body>
    </html>
  `;
}

// Function to create an HTML file with given filename and content
function createHTMLFile(filename, content) {
  fs.writeFile(filename, content, (err) => {
    if (err) {
      console.error(`Error creating ${filename}:`, err);
    } else {
      console.log(`${filename} created successfully.`);
    }
  });
}

// Prompt the user for input
rl.question('Enter title for HTML file: ', (title) => {
  rl.question('Enter content for HTML file: ', (content) => {
    rl.question('Enter filename for HTML file (without extension): ', (filename) => {
      // Generate HTML content
      const htmlContent = generateHTML(title, content);
      // Create HTML file
      createHTMLFile(`${filename}.html`, htmlContent);
      // Close the readline interface
      rl.close();
    });
  });
});
