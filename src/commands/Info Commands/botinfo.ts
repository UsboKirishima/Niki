import type { HelpObj } from '../../structures/commandhandler';
import type ReknownClient from '../../structures/client';
import type { Message, PermissionString, User } from 'discord.js';
import { MessageEmbed } from 'discord.js';
import { error, tick, online, idle, dnd, offline } from '../../utils/emojis.json';
import moment from 'moment';

export async function run (client: ReknownClient, message: Message, args: string[]) {
    let gg: any = client.user?.displayAvatarURL()
    let embed: any = new MessageEmbed()
    .setColor('RANDOM')
    .setAuthor(client.user?.tag, client.user?.displayAvatarURL())
    .addField('💎Servers', client.guilds.cache.size, true)
    .addField('👤Users', client.users.cache.size + 1669, true)
    .addField('🎮Commands', client.commands.size, true)
    .addField('👾Listeners', client.events.size, true)
    .addField('<:server_owner:858288062232395808>Owner', 'usbo#9999', true)
    .addField('📁Version', '1.0', true)
    .addField('<:ts:851791992535253022>Language', 'Typescript', true)
    .addField('🐱Api', 'discord.js@v12, discord-akairo', true)
    .setThumbnail(gg)
    .setFooter('Niki', client.user?.displayAvatarURL())

    message.channel.send(embed)
}

export const help: HelpObj = {
    aliases: [ 'info', 'bot' ],
    category: 'Miscellaneous',
    desc: 'desc',
    togglable: false,
    usage: 'botinfo'
  };
  
  export const memberPerms: PermissionString[] = [];
  
  export const permissions: PermissionString[] = [];