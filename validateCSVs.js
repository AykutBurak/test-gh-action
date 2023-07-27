const fs = require('fs');
const path = require('path')
const CSVValidator = require('csv-file-validator')

module.exports = function validateJSONs() {
  const CSVsInDir = fs.readdirSync('./lang').filter(file => path.extname(file) === '.csv');

  CSVsInDir.forEach(file => {
    const fileData = fs.readFileSync(path.join('./lang', file));
    CSVValidator(fileData).then(csvData => {
        csvData.data // Array of objects from file
        throw new Error(csvData.inValidData) // Array of error messages
    })
  });
}