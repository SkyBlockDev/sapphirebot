import { SapphireClient } from '@sapphire/framework';
import { CommandHandler } from 'discord-akairo';
import { join } from 'path';
class SapClient extends SapphireClient {
	//@ts-ignore - sap client
	public commandHandler = new CommandHandler(this, {
		directory: join(__dirname, 'commands'),
		prefix: '!',
		allowMention: true,
		handleEdits: true,
		commandUtil: true,
	});
	login(token: string) {
		this.commandHandler.loadAll();
		return super.login(token);
	}
}
const sapClient = new SapClient();

sapClient.login('token-token-troken');
