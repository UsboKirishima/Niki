import type { HelpObj } from '../../structures/commandhandler';
import type ReknownClient from '../../structures/client';
import type { Message, PermissionString, User } from 'discord.js';
import { MessageEmbed } from 'discord.js';
import { error, tick, online, idle, dnd, offline } from '../../utils/emojis.json';
import moment from 'moment';
import { UserFlagsString } from "discord.js";

export async function run (client: ReknownClient, message: Message, args: string[]) {
    let embed: any = new MessageEmbed()
    .setAuthor(client.user?.tag, client.user?.displayAvatarURL())
    .setDescription('[INVITE](https://discord.com/api/oauth2/authorize?client_id=848616509765189642&permissions=8&scope=bot%20applications.commands) | [SUPPORT SERVER](https://www.dsc.gg/MagicPoison)')
    .setColor('RANDOM')
    message.channel.send(embed)
}

export const help: HelpObj = {
    aliases: [ 'inv', 'add' ],
    category: 'Miscellaneous',
    desc: 'desc',
    togglable: false,
    usage: 'invite',
  };
  
  export const memberPerms: PermissionString[] = [];
  
  export const permissions: PermissionString[] = [];
