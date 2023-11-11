const createJson = require("./createJson")

const fs = require('fs');
const path = require('path');

module.exports = async function (interaction) {
    if (interaction.options.data.length) {
        const jsonPath = "/../jsonFiles/welcomeMessageSettings.json"
        createJson(jsonPath)
        const currentDirectory = __dirname;
        const filePath = path.join(currentDirectory, jsonPath);
    
        const jsonContent = require(filePath);
    
        if (interaction.options.get('aktivieren')) {
            jsonContent.aktivieren = interaction.options.get('aktivieren');
        }
        if (interaction.options.get('channel')) {
            jsonContent.channel = interaction.options.get('channel');
        }
        if (interaction.options.get('url')) {
            jsonContent.url = interaction.options.get('url')
        }
    
        const jsonString = JSON.stringify(jsonContent, null, 2);
    
        fs.writeFile(filePath, jsonString, 'utf-8', (err) => {
            if (err) {
              console.error('Fehler beim Schreiben der Datei:', err);
            } else {
              console.log('Die JSON-Datei wurde erfolgreich aktualisiert.');
            }
          });
    }
}