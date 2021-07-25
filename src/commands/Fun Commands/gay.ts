import type { HelpObj } from '../../structures/commandhandler';
import type ReknownClient from '../../structures/client';
import type { Message, PermissionString, User } from 'discord.js';
import { MessageEmbed } from 'discord.js';
import { error, tick, online, idle, dnd, offline } from '../../utils/emojis.json';
import moment from 'moment';

export async function run (client: ReknownClient, message: Message, args: string[]) {
    
    let embe: any = new MessageEmbed()
    .setColor('RANDOM')
    .setAuthor(`[GAY] ${message.author.tag}`, message.author.displayAvatarURL({ dynamic: true }))
    .setDescription(`Gayrate: ${Math.floor(Math.random() * (100 - 1)) + 1}%`)
    .setFooter('🏳️‍🌈🏳️‍🌈', message.author.displayAvatarURL({ dynamic: true }))


    message.channel.send(embe)
    
}

export const help: HelpObj = {
    aliases: [ 'gayrate' ],
    category: 'Miscellaneous',
    desc: 'desc',
    togglable: false,
    usage: 'gay',
  };
  
  export const memberPerms: PermissionString[] = [];
  
  export const permissions: PermissionString[] = [];