const fs = require('fs');
const readline = require('readline');

// Function to update HTML content
function updateHTML(keyword, replacement) {
  // Read the content of the HTML file
  fs.readFile('about.html', 'utf8', (err, data) => {
    if (err) {
      console.error('Error reading file:', err);
      return;
    }

    // Replace occurrences of the keyword with the replacement string
    const updatedContent = data.replace(new RegExp(keyword, 'g'), replacement);

    // Write the updated content back to the file
    fs.writeFile('about.html', updatedContent, 'utf8', (err) => {
      if (err) {
        console.error('Error writing file:', err);
        return;
      }
      console.log('File updated successfully.');
    });
  });
}

// Create readline interface for user input
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Prompt user for keyword and replacement
rl.question('Enter the keyword to replace: ', (keyword) => {
  rl.question('Enter the replacement string: ', (replacement) => {
    // Update HTML content with user-provided values
    updateHTML(keyword, replacement);
    // Close the readline interface
    rl.close();
  });
});
