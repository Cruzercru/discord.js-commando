const Command = require('../base');

module.exports = class HelpCommand extends Command {
	constructor(client) {
		super(client, {
			name: 'help',
			group: 'util',
			memberName: 'help',
			aliases: ['commands'],
			description: 'Get info about all the commands',
			guarded: true
		});
	}

	async run(msg) {
		msg.author.sendMessage(`Documentation on all commands can be found here: https://backpackbot.com/#commands`)
			.then(a=> msg.reply(`Sent you a DM with information.`).then(a=>a.delete(8000)))
	}
};
