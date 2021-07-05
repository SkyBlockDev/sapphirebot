import { Command } from 'discord-akairo';
export default class ping extends Command {
	constructor() {
		super('ping', {
			aliases: ['ping'],
		});
	}
	exec(message) {
		message.reply('PONG');
	}
}
