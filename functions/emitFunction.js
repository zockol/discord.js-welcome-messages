

module.exports = async function (interaction, client) {
    
    if (interaction.options.data[0].value == 'guildmemberadd') client.emit("guildMemberAdd", interaction.member);
    
    interaction.reply({ content: `${interaction.options.data[0].value} ausgeführt.` , ephemeral: true });
}