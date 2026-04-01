const fs = require('fs');
const path = require('path');

function deleteFolderRecursive(directoryPath) {
  if (fs.existsSync(directoryPath)) {
    fs.readdirSync(directoryPath).forEach((file, index) => {
      const curPath = path.join(directoryPath, file);
      if (fs.lstatSync(curPath).isDirectory()) {
         deleteFolderRecursive(curPath);
      } else {
        try {
          fs.unlinkSync(curPath);
        } catch (e) {
          console.log(`Could not delete file: ${curPath} - ${e.message}`);
        }
      }
    });
    try {
      fs.rmdirSync(directoryPath);
    } catch (e) {
      console.log(`Could not delete directory: ${directoryPath} - ${e.message}`);
    }
  }
};

const paths = [
  path.join(__dirname, 'apps/web/.next'),
  path.join(__dirname, 'apps/web/.next_clean')
];

paths.forEach(p => {
  console.log(`Deleting ${p}...`);
  deleteFolderRecursive(p);
});
console.log('Cleanup complete.');
