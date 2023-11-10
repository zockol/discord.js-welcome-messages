const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('welcomemessage')
		.setDescription('Einstellen der welcomeMessage')
        .addBooleanOption(option =>
            option.setName('aktivieren')
                .setDescription('An-/Ausschalten der Welcome Messages'))
        .addChannelOption(option => 
            option.setName('channel')
                .setDescription('Der Channel in den die Welcome Messages erstellt werden sollen'))
        .addStringOption(option =>
            option.setName('url')
                .setDescription("URL des Hintergrundbilds (ansonsten default)"))
};