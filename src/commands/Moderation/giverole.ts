import type { HelpObj } from '../../structures/commandhandler';
import type ReknownClient from '../../structures/client';
import type { Message, PermissionString, User } from 'discord.js';
import { MessageEmbed } from 'discord.js';
import { error, tick, online, idle, dnd, offline } from '../../utils/emojis.json';


 
export async function run (client: ReknownClient, message: Message, args: string[]) {
    if(!message.guild?.me?.hasPermission('MANAGE_ROLES')) return await message.channel.send(new MessageEmbed().setDescription(`${error} I can't use this command.\n\nPermission required: MANAGE_ROLES`))
    if(!message.member?.hasPermission('MANAGE_ROLES')) return await message.channel.send(new MessageEmbed().setDescription(`${error} You can't use this command.\n\nPermission required: MANAGE_ROLES`))
    var user;

    if(!args.slice(1).join(" ")) {
        return await message.channel.send(new MessageEmbed().setDescription(`${error} Invalid user.`))
    } else {
      user = message.mentions.members?.first()
      if(!user) {
      user = message.guild?.members.cache.get(args[1]) || message.guild?.members.cache.find(user => user.user.username.toLowerCase() == args[1]) || message.guild?.members.cache.find(user => user.user.tag.toLowerCase() == args[1])
      }
    }

    if(!user) return await message.channel.send(new MessageEmbed().setDescription(`${error} Invalid user.`))
    
    var role: any;

    if(!args.slice(2).join(" ")) {
        return await message.channel.send(new MessageEmbed().setDescription(`${error} Invalid role.`))
    } else {
      role = message.mentions.roles?.first()
      if(!role) {
      role = message.guild?.roles.cache.get(args[1]) 
      }
    }

    if(!user) return await message.channel.send(new MessageEmbed().setDescription(`${error} Invalid role.`))
    if(user.roles.cache.has(role.id)) return await message.channel.send(new MessageEmbed().setDescription(`${error} This user has already the role ${role.id}.`))

    user.roles.add(`${role.id}`)
    message.channel.send(new MessageEmbed().setDescription(`${tick} The role has been added to ${user.toString()}`))
    
} 

export const help: HelpObj = {
  aliases: ['addrole'],
  category: 'Miscellaneous',
  desc: 'desc',
  togglable: false,
  usage: 'giverole',
};

export const memberPerms: PermissionString[] = [];

export const permissions: PermissionString[] = [];