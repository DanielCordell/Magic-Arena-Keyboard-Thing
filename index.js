const path = require('path')
const fs = require('fs');
const request = require('request');

const propsPath = path.join("C:", "ProgramData", "SteelSeries", "SteelSeries Engine 3", "coreProps.json");

var apiURL;

const gameName = "MAGIC_ARENA";
const gameDisplay = "Magic Arena Color";
const developer = "Daniel Cordell"

fs.readFile(propsPath, 'utf8', (err, file) => {
  if (err) {
    console.log(err);
    process.exit(-1);
  }
  apiURL = "http://" + JSON.parse(file).address;
  console.log(apiURL);

  setupGameData();
})


setupGameData = () => {
  request.post({
    headers: {'content-type' : 'application/json'},
    url:     apiURL + "/game_metadata",
    body:    JSON.stringify({
      "game": gameName,
      "game_display_name": gameDisplay,
      "developer": developer
    })
  }, function(error, response, body){
    console.log(error);
    console.log(body);
  });  
}