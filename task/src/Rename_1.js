const fs = require('fs');


const oldFilePath = 'old_page.html';
const newFilePath = 'new_page.html';

// Rename the file
fs.rename(oldFilePath, newFilePath, (err) => {
  if (err) {
    console.error('Error renaming file:', err);
    return;
  }
  console.log('File renamed successfully.');
});
