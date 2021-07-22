import type { HelpObj } from '../../structures/commandhandler';
import type ReknownClient from '../../structures/client';
import type { Message, PermissionString } from 'discord.js';
import { MessageEmbed } from 'discord.js'
import { developer, loading } from '../../utils/emojis.json'

export async function run (client: ReknownClient, msg: Message, args: string[]) {
    if(msg.author.id !== '848463685374443530') return msg.channel.send(`You can\'t use this command -_-!'`)

    msg.channel.send(loading + " Restarting...");

		msg.client.user?.setStatus('dnd');
		msg.client.user?.setActivity("Restarting...");

  	   	// Logger

  	   	
  		// Command

  	   	console.log("<" + msg.guild + ">[#" + msg.channel + "] RESTART | " + msg.author + msg.author.tag + " is restarting the bot...");

  	   	setTimeout(destroyClient, 3000);
		setTimeout(restart, 5000);

  	   	function destroyClient() {
			msg.client.destroy();
			console.log("<INFO> Restarting in 2 seconds...");
  	   	}

  	   	function restart() {
			console.log("<INFO> Restarting...");

			process.exit();
  	   	}
}


export const help: HelpObj = {
    aliases: ['reload'],
    category: 'Miscellaneous',
    desc: 'desc',
    togglable: false,
    usage: 'restart'
  };