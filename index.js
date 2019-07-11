const path = require('path')
const fs = require('fs');

const propsPath = path.join("C:", "ProgramData", "SteelSeries", "SteelSeries Engine 3", "coreProps.json");

var url;

fs.readFile(propsPath, 'utf8', (err, file) => {
  if (err) {
    console.log(err);
    process.exit(-1);
  }
  url = JSON.parse(file).address;
  console.log(url);
})