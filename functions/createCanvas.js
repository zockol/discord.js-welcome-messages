const {createCanvas, loadImage} = require("canvas");
const path = require('path');
const Discord = require('discord.js')
require("dotenv").config();

module.exports = async function (member, client) {


    const currentDirectory = __dirname;
    const relativePath = '../jsonFiles/welcomeMessageSettings.json';
    const filePath = path.join(currentDirectory, relativePath);
    const jsonContent = require(filePath);

    const channel = member.guild.channels.cache.find(ch => ch.id === jsonContent.channel.value);

    try {
    // Lade das Bild von der URL herunter
    //const imageUrl = member.user.displayimageUrl({ extension: 'png' });
    var imageUrl
    var image

    // Load the user's avatar from the URL
    try {
        imageUrl = jsonContent.url.value
        image = await loadImage(imageUrl);
    } catch (error) {
        console.log("Angegebene URL konnte nicht gefunden werden")
        imageUrl = currentDirectory + "/../img/default.png"
        image = await loadImage(imageUrl);
    }

    

    // Erstelle ein Canvas
    const canvas = createCanvas(1100, 500);
    const context = canvas.getContext('2d');

    context.drawImage(image, 0, 0, canvas.width, canvas.height);

    context.fillStyle = 'rgba(0, 0, 0, 1)';

    // Calculate the dimensions of the rectangle (80% of the original canvas)
    const rectWidth = canvas.width * 0.85;
    const rectHeight = canvas.height * 0.85;

    // Calculate the position to center the rectangle
    const rectX = (canvas.width - rectWidth) / 2;
    const rectY = (canvas.height - rectHeight) / 2;

    // Set the global alpha for the transparency
    context.globalAlpha = 0.65;

    // Draw the semi-transparent black rectangle
    context.roundRect(rectX, rectY, rectWidth, rectHeight, 10)
    context.fill()

    context.globalAlpha = 1;

    const centerX = canvas.width / 2;
    const centerY = canvas.height / 2 - 60;
    const circleRadius = Math.min(canvas.width * 0.23, canvas.height * 0.23);

    var text = member.user.username + ' tritt dem Server bei';
    context.font = '46px Montserrat'; // Adjust the font size and style as needed
    context.fillStyle = 'rgba(255, 255, 255, 1)';
    context.textAlign = 'center';
    context.fillText(text, centerX, centerY + 185); // Adjust the vertical position as needed

    const guild = client.guilds.cache.get(process.env.GUILD_ID);
    var memberCount = guild.members.cache.filter(member => !member.user.bot).size;

    var text = `BANI - Member #${memberCount}`;
    context.font = '30px Montserrat'; // Adjust the font size and style as needed
    context.fillStyle = 'rgba(255, 255, 255, 0.5)';
    context.textAlign = 'center';
    context.fillText(text, centerX, centerY + 220); // Adjust the vertical position as needed

    var avatarUrl = await loadImage(member.user.displayAvatarURL({ extension: 'png' }));
    context.beginPath();
    context.arc(centerX, centerY, circleRadius, 0, 2 * Math.PI, false);
    context.strokeStyle = 'rgba(255, 255, 255, 1)';
    context.lineWidth = 10;
    context.stroke();
    context.clip();
    context.drawImage(avatarUrl, centerX - circleRadius, centerY - circleRadius, circleRadius * 2, circleRadius * 2)
    context.restore();





    // Reset global alpha for future drawings
    
    channel.send({
        files: [{
            attachment: canvas.toBuffer(),
            name: 'welcome.png'
        }]
    });
    } catch (error) {
    console.log('Es gab einen Fehler beim Erstellen des Canvas.', error);
    }
    
}