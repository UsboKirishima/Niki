import type { HelpObj } from '../../structures/commandhandler';
import type ReknownClient from '../../structures/client';
import type { Message, PermissionString, User } from 'discord.js';
import { MessageEmbed } from 'discord.js';
import { error, tick, online, idle, dnd, offline } from '../../utils/emojis.json';


 
export async function run (client: ReknownClient, message: Message, args: string[]) {
    if(!message.guild?.me?.hasPermission('MANAGE_MESSAGES')) return await message.channel.send(new MessageEmbed().setDescription(`${error} I can't use this command.\n\nPermission required: MANAGE_MESSAGES`))
    if(!message.member?.hasPermission('MANAGE_MESSAGES')) return await message.channel.send(new MessageEmbed().setDescription(`${error} You can't use this command.\n\nPermission required: MANAGE_MESSAGES`))
    if (!args[1]) return await message.channel.send(new MessageEmbed().setDescription(error + ' Invalid Number'))
        let g: any = args[1]
        let gg: any = message.channel
        if (isNaN(g)) return await message.channel.send(new MessageEmbed().setDescription(error + ' Invalid Number'))
        if (g == 0 || g == 1) return await message.channel.send(new MessageEmbed().setDescription(`${error} Enter values higher than 1`))
        try {
        message.delete({ timeout: 1000 })
        if (g > 100) {
            await gg.bulkDelete(100, true)
            await gg.bulkDelete(gg - 100, true)
        } else {
            await gg.bulkDelete(g, true)
        }
      } catch(err) {
        
      }
} 

export const help: HelpObj = {
  aliases: ['clean', 'purge'],
  category: 'Miscellaneous',
  desc: 'desc',
  togglable: false,
  usage: 'clear',
};

export const memberPerms: PermissionString[] = [];

export const permissions: PermissionString[] = [];