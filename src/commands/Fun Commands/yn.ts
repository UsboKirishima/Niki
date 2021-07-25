import type { HelpObj } from '../../structures/commandhandler';
import type ReknownClient from '../../structures/client';
import type { Message, PermissionString, User } from 'discord.js';
import { MessageEmbed } from 'discord.js';
import { error, tick, online, idle, dnd, offline } from '../../utils/emojis.json';
import moment from 'moment';

export async function run (client: ReknownClient, message: Message, args: string[]) {
    const question: String = args.slice(1).join(" ")
    const choices: string[] = [
		'Yes',
		'No'
	];
    let respond: String = choices[Math.floor(Math.random() * choices.length)]
    return await message.channel.send(new MessageEmbed()
        .setAuthor(`[YES OR NO] ${message.author.tag}`, message.author.displayAvatarURL({ dynamic: true }))
        .addField('Question', question)
        .addField('Answer', respond)
        .setColor('RANDOM')
    )
}

export const help: HelpObj = {
    aliases: [ 'yesno' ],
    category: 'Miscellaneous',
    desc: 'desc',
    togglable: false,
    usage: 'yn',
  };
  
  export const memberPerms: PermissionString[] = [];
  
  export const permissions: PermissionString[] = [];