import type { HelpObj } from '../../structures/commandhandler';
import type ReknownClient from '../../structures/client';
import type { Message, PermissionString, User } from 'discord.js';
import { MessageEmbed } from 'discord.js';
import { error, tick, online, idle, dnd, offline } from '../../utils/emojis.json';
import moment from 'moment';

export async function run (client: ReknownClient, message: Message, args: string[]) {
    let server: any = message.guild

    let par = ''
    if(message.guild?.partnered == true) par = 'Yes';
    if(message.guild?.partnered == false || message.guild?.partnered == null) par = 'Nop'

    const serverinfo_embed: any = new MessageEmbed()
    .setAuthor(`[SERVERINFO] ${message.guild?.name}`, server.iconURL({ dynamic: true, format: 'png' }))
    .addField('Name', message.guild?.name, true)
    .addField('ID', message.guild?.id, true)
    .addField('Icon', `[**LINK**](${message.guild?.iconURL({ dynamic: true, format: 'png', size: 2048 })})`, true)
    .addField('Owner', `<@${message.guild?.ownerID}>`, true)
    .addField('Server Date', `${moment(message.guild?.createdTimestamp).format('LT')} ${moment(message.guild?.createdTimestamp).format('LL')} [${moment(message.guild?.createdTimestamp).fromNow()}]`, true)
    .addField('Server Regions', message.guild?.region, true)
    .addField('Partner', par, true)
    .addField('Rules Channel', `<#${message.guild?.rulesChannelID}>`, true)
    .addField('All Members', message.guild?.memberCount, true)
    .addField('Channels', server.channels.cache.size, true)
    .addField('Roles', message.guild?.roles.cache.sort((a, b) => b.position - a.position).map(role => role.toString()).length, true)
    //.addField('Messages', server.messages.cache.size, true)
    .addField('Emojis', message.guild?.emojis.cache.size, true)
    .addField('Boosts', message.guild?.premiumSubscriptionCount, true)
    .setThumbnail(server.iconURL({ dynamic: true, format: 'png' }))

    message.channel.send(serverinfo_embed)
}

export const help: HelpObj = {
    aliases: [ 'server', 'infoserver' ],
    category: 'Miscellaneous',
    desc: 'desc',
    togglable: false,
    usage: 'serverinfo'
  };
  
  export const memberPerms: PermissionString[] = [];
  
  export const permissions: PermissionString[] = [];