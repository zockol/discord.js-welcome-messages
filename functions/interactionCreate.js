
const guildMemberEmitFunction = require("./guildMemberEmitFunction");
const welcomeMessageSettings = require("./welcomeMessageSettings");

module.exports = async function (interaction, client) {
	if (!interaction.isChatInputCommand()) return;

	const {commandName} = interaction;

	if (commandName === "welcomemessage") {
		welcomeMessageSettings(interaction)
	} else if (commandName === "emit") {
		guildMemberEmitFunction(interaction, client)
	}
};
