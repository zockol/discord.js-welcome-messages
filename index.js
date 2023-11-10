
const { Client, GatewayIntentBits } = require("discord.js");

require("dotenv").config();

const deployCommands = require("./functions/deployCommands.js");
const interactionCreate = require("./functions/interactionCreate.js");
  
const client = new Client({
intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildIntegrations
],
});

client.on("ready", () => {
    console.log("Bot ist online!")
    deployCommands();
})

client.on("interactionCreate", async (interaction) => {
    interactionCreate(interaction, client);
  });

client.login(process.env.TOKEN);
