const fs = require('fs');

// Specify the directory path
const directoryPath = 'html_backup';

// Read the directory
fs.readdir(directoryPath, (err, files) => {
  if (err) {
    console.error('Error reading directory:', err);
    return;
  }

  // Iterate through each file
  files.forEach((file) => {
    // Check if the file is an HTML file
    if (file.endsWith('.html')) {
      // Get the current timestamp
      const timestamp = new Date().toISOString().replace(/:/g, '-').replace(/\..+/, '');

      // Construct the new file name with timestamp
      const newFileName = `${file.split('.html')[0]}_${timestamp}.html`;

      // Rename the file with the new name
      fs.rename(`${directoryPath}/${file}`, `${directoryPath}/${newFileName}`, (err) => {
        if (err) {
          console.error(`Error renaming file ${file}:`, err);
        } else {
          console.log(`File ${file} renamed to ${newFileName} successfully.`);
        }
      });
    }
  });
});
