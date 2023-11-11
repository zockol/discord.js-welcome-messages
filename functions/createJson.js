
const fs = require('fs');
const path = require('path');

module.exports = async function (givenPath) {
    const currentDirectory = __dirname;
    const filePath = currentDirectory + givenPath
    if (!fs.existsSync(filePath)) {

        const directory = path.dirname(filePath);
        if (!fs.existsSync(directory)) {
          fs.mkdirSync(directory, { recursive: true });
        }

        const jsonContent = {};
        const jsonString = JSON.stringify(jsonContent, null, 2);
        fs.writeFile(filePath, jsonString, 'utf-8', (err) => {
            if (err) {
              console.error('Fehler beim Erstellen der welcomeMessageSettings.json:', err);
            } else {
              console.log('Die welcomeMessageSettings.json wurde erfolgreich erstellt.');
            }
          });
    }
}