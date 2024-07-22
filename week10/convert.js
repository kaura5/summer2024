const fs = require('fs');
const { parse } = require('json2csv');

// Function to convert JSON data to CSV
const convertToCSV = (jsonArray) => {
  try {
    const csv = parse(jsonArray);
    return csv;
  } catch (err) {
    console.error('JSON to CSV conversion error:', err);
  }
};

// Read JSON data from file
fs.readFile('data.json', 'utf8', (err, data) => {
  if (err) {
    console.error('Error reading the JSON file:', err);
    return;
  }

  console.log('JSON data:', data);
  const guests = JSON.parse(data);
  const csvData = convertToCSV(guests);
  console.log('CSV data:', csvData);

  // Write CSV data to a new file
  fs.writeFile('data.csv', csvData, (err) => {
    if (err) {
      console.error('Error writing the CSV file:', err);
      return;
    }
    console.log('CSV file has been saved.');
  });
});


// run "node convert.js" in the terminal while on week10