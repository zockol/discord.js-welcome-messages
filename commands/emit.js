
const { SlashCommandBuilder } = require('discord.js');
module.exports = {
    data: new SlashCommandBuilder()
      .setName("emit")
      .setDescription("Event Simulieren")
      .addStringOption(option => 
        option.setName('emitevent')
          .setDescription("Welches Event soll simuliert werden?")
          .setRequired(true)
          .addChoices({
            name: 'guildMemberAdd', value: 'guildmemberadd'
          })),
  };
