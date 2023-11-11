

module.exports = async function (interaction, client) {
    client.emit("guildMemberAdd", interaction.member);
  
    interaction.reply({ content: "Emitted GuildMemberAdd", ephemeral: true });
}