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
    if(role.rawPosition >= message.guild.me.roles.highest.rawPosition) return await message.channel.send(new MessageEmbed().setDescription(`${error} I don't have access to this role`))
    if(!user) return await message.channel.send(new MessageEmbed().setDescription(`${error} Invalid role.`))
    if (role.rawPosition >= message.member.roles.highest.rawPosition) return await message.channel.send(new MessageEmbed().setDescription(`${error} You don't have access to this role`))
    if(!user.roles.cache.has(role)) return await message.channel.send(new MessageEmbed().setDescription(`${error} This role is already claimed.`))

    user.roles.remove(`${role}`)
    message.channel.send(new MessageEmbed().setDescription(`${tick} The role has been removed to ${user.toString()}`))
    
} 

export const help: HelpObj = {
  aliases: ['removerole'],
  category: 'Miscellaneous',
  desc: 'desc',
  togglable: false,
  usage: 'takerole',
};

export const memberPerms: PermissionString[] = [];

export const permissions: PermissionString[] = [];