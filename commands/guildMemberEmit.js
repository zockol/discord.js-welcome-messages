
const { SlashCommandBuilder } = require('discord.js');
module.exports = {
    data: new SlashCommandBuilder()
      .setName("emit")
      .setDescription("Emit the guildMemberAdd/Remove events.")
      .setDMPermission(false),
  };
