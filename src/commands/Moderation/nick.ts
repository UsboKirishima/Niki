import type { HelpObj } from '../../structures/commandhandler';
import type ReknownClient from '../../structures/client';
import { Message, MessageEmbed, PermissionString } from 'discord.js';
import { tick, error } from '../../utils/emojis.json';

export async function run (client: ReknownClient, message: Message, args: string[]) {
    if(!message.guild?.me?.hasPermission('CHANGE_NICKNAME')) return await message.channel.send(new MessageEmbed().setDescription(`${error} I can't use this command.\n\nMissing Permissions CHANGE_NICKNAME.`))
    if(!message.member?.hasPermission('MANAGE_NICKNAMES')) return await message.channel.send(new MessageEmbed().setDescription(`${error} You can't use this commands\n\nPermissions: MANAGE_NICKNAMES`))
    let nick: string = args.slice(1).join(" ")
    message.guild?.me?.setNickname(nick)
    message.delete()
    message.channel.send('Hey its me ur ' + nick)
}

export const help: HelpObj = {
  aliases: [ 'nickname' ],
  category: 'Miscellaneous',
  desc: 'Displays the ping of the bot.',
  dm: true,
  togglable: false,
  usage: 'nick'
};

export const memberPerms: PermissionString[] = [];

export const permissions: PermissionString[] = [];