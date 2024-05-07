const fs = require('fs');

// Specify the file path
const filePath = 'obsolete_page.html';

// Check if the file exists
fs.access(filePath, fs.constants.F_OK, (err) => {
  if (err) {
    console.error('Error:', err);
    return;
  }

  // Delete the file
  fs.unlink(filePath, (err) => {
    if (err) {
      console.error('Error deleting file:', err);
      return;
    }
    console.log('File deleted successfully.');
  });
});
