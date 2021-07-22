import type { HelpObj } from '../../structures/commandhandler';
import type ReknownClient from '../../structures/client';
import { GuildManager, GuildMember, Message, PermissionString, PartialGuildMember } from 'discord.js';
import { MessageEmbed } from 'discord.js'
import 'discord-reply'
import { inspect } from 'util';

export async function run (client: ReknownClient, message: Message, args: string[]) {
    if(message.author.id !== '848463685374443530') return message.channel.send(`You can\'t use this command -_-!'`)

    const gg: any = GuildMember
    client.emit('guildMemberAdd', gg)
}

export const help: HelpObj = {
  aliases: [ 'wt' ],
  category: 'Miscellaneous',
  desc: 'desc',
  togglable: false,
  usage: 'welcometest'
};

export const memberPerms: PermissionString[] = [];

export const permissions: PermissionString[] = [];

