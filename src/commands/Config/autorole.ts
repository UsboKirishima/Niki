import type { HelpObj } from '../../structures/commandhandler';
import type ReknownClient from '../../structures/client';
import type { Message, PermissionString, User } from 'discord.js';
import { MessageEmbed } from 'discord.js';
import { error, tick, online, idle, dnd, offline } from '../../utils/emojis.json';
import * as db from 'quick.db';


export async function run (client: ReknownClient, message: Message, args: string[]) {
    if(!args.slice(1).join(" ")) {
        let g: any = message.guild?.iconURL({ dynamic: true })
        message.channel.send(
            new MessageEmbed()
            .setColor('RANDOM')
            .setAuthor('[AUTO ROLE] ' + message.guild?.name, g)
            .setDescription(`
            *-ENABLE-*
            Type \`autorole + [on/off]\`

            ________________________________________________

            *-ROLE-*
            Type \`autorole + [roloe id/@]\`
            `)
            
        )
    }
    if(args[1].toLowerCase() == 'on') {
        if(message.guild?.me?.hasPermission('MANAGE_CHANNELS')) return await message.channel.send(new MessageEmbed().setDescription(`${error} I can't use this command.\n\nPermission required: MANAGE_CHANNELS.`))
        if(!message.member?.hasPermission('MANAGE_GUILD')) return await message.channel.send(new MessageEmbed().setDescription(`${error} You can't use this command.\n\nPermissions: MANAGE_GUILD`))
        if(db.get(`ar.${message.guild?.id}.enable`) == true) return await message.channel.send(new MessageEmbed().setDescription(`${error} Auto role is already enabled.\n\nType \`autorole + [OFF]\` to disable.`))
        db.set(`ar.${message.guild?.id}.enable`, true)
        return await message.channel.send(new MessageEmbed().setDescription(`${tick} Auto role has been enabled.`))
    }
    if(args[1].toLowerCase() == 'off') {
        if(message.guild?.me?.hasPermission('MANAGE_CHANNELS')) return await message.channel.send(new MessageEmbed().setDescription(`${error} I can't use this command.\n\nPermission required: MANAGE_CHANNELS.`))
        if(!message.member?.hasPermission('MANAGE_GUILD')) return await message.channel.send(new MessageEmbed().setDescription(`${error} You can't use this command.\n\nPermissions: MANAGE_GUILD`))
        if(db.get(`ar.${message.guild?.id}.enable`) == false || db.get(`ar.${message.guild?.id}.enable`) == undefined || db.get(`ar.${message.guild?.id}.enable`) == null) return await message.channel.send(new MessageEmbed().setDescription(`${error} Auto role is already enabled.\n\nType \`autorole + [ON]\` to enable.`))
        db.delete(`ar.${message.guild?.id}.enable`)
        return await message.channel.send(new MessageEmbed().setDescription(`${tick} Auto role has been disabled.`))
    }
    if(args[1].toLowerCase() == 'role') {
        if(message.guild?.me?.hasPermission('MANAGE_CHANNELS')) return await message.channel.send(new MessageEmbed().setDescription(`${error} I can't use this command.\n\nPermission required: MANAGE_CHANNELS.`))
        if(!message.member?.hasPermission('MANAGE_GUILD')) return await message.channel.send(new MessageEmbed().setDescription(`${error} You can't use this command.\n\nPermissions: MANAGE_GUILD`))
       
        var role;

        if(!args.slice(1).join(" ")) {
            return await message.channel.send(new MessageEmbed().setDescription(`${error} Invalid role.`))
        } else {
          role = message.mentions.roles?.first()?.id
          if(!role) {
          role = message.guild?.roles.cache.get(args[1])?.id
          }
        }
    
        if(!role) return await message.channel.send(new MessageEmbed().setDescription(`${error} Invalid role.`))
    
        db.set(`ar.${message.guild?.id}.role`, role)
        return await message.channel.send(`${tick} The role has been set.`)
    }
}

export const help: HelpObj = {
    aliases: [ 'rolejoin', 'automaticrole' ],
    category: 'Miscellaneous',
    desc: 'desc',
    togglable: false,
    usage: 'autorole'
  };
  
  export const memberPerms: PermissionString[] = [];
  
  export const permissions: PermissionString[] = [];