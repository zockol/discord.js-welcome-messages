const welcomeMessage = require("./welcomeMessage");

module.exports = async function (interaction, client) {
	if (!interaction.isChatInputCommand()) return;

	const {commandName} = interaction;

	if (commandName === "welcomemessage") {
		welcomeMessage(interaction)
	}
};
