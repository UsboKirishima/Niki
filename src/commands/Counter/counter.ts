import type { HelpObj } from '../../structures/commandhandler';
import type ReknownClient from '../../structures/client';
import type { Message, PermissionString, User } from 'discord.js';
import { MessageEmbed } from 'discord.js';
import { error, tick, online, idle, dnd, offline } from '../../utils/emojis.json';
import * as db from 'quick.db';


 
export async function run (client: ReknownClient, message: Message, args: string[]) {
  if(!message.guild?.me?.hasPermission('MANAGE_CHANNELS')) return await message.channel.send(new MessageEmbed().setDescription(`${error} I can't use this commands, Please give me MANAGE_CHANNELS permission.`))
    if(!args.slice(1).join(" ")) {
      let help = String.raw`
**COUNTER**

Count members and bots

________________________________________________

*- All members*

**counter + [allmembers] + [channel id/@]**

________________________________________________

*- Members*

**counter + [members] + [channel id/@]**

________________________________________________

*- Bots*

**counter + [bots] + [channel id/@]**

________________________________________________
`
message.channel.send(new MessageEmbed().setAuthor(message.guild.name).setDescription(help))
    }
    if(args[1] == 'allmembers') {
      if(!message.member?.hasPermission('MANAGE_CHANNELS')) return await message.channel.send(new MessageEmbed().setDescription(`${error} You can't use this commands (Permissions: MANAGE_CHANNELS)`))
      if(!args[2]) return await message.channel.send(new MessageEmbed().setDescription(`${error} Please specify a channel first.\n\n\`counter + [allmembers] + [CHANNEL id/@]\``))
      let ch;
      ch = message.mentions.channels.first()?.id
      if(!message.mentions.channels.first()) {
        ch = message.guild?.channels.cache.get(args[2])?.id
      }
      if(!ch) return await message.channel.send(`${error} Invalid channel`)
      db.set(`counter.${message.guild?.id}.amembers`, ch)
      message.channel.send(`${tick} The allmembers counter has been set to <#${ch}>`)
    }
    if(args[1] == 'members') {
      if(!message.member?.hasPermission('MANAGE_CHANNELS')) return await message.channel.send(new MessageEmbed().setDescription(`${error} You can't use this commands (Permissions: MANAGE_CHANNELS)`))
      if(!args[2]) return await message.channel.send(new MessageEmbed().setDescription(`${error} Please specify a channel first.\n\n\`counter + [members] + [CHANNEL id/@]\``))
      let mc;
      mc = message.mentions.channels.first()?.id
      if(!message.mentions.channels.first()) {
        mc = message.guild?.channels.cache.get(args[2])?.id
      }
      if(!mc) return await message.channel.send(`${error} Invalid channel`)
      db.set(`counter.${message.guild?.id}.members`, mc)
      message.channel.send(`${tick} The members counter has been set to <#${mc}>`)
    }
    if(args[1] == 'bots') {
      if(!message.member?.hasPermission('MANAGE_CHANNELS')) return await message.channel.send(new MessageEmbed().setDescription(`${error} You can't use this commands (Permissions: MANAGE_CHANNELS)`))
      if(!args[2]) return await message.channel.send(new MessageEmbed().setDescription(`${error} Please specify a channel first.\n\n\`counter + [bots] + [CHANNEL id/@]\``))
      let bc;
      bc = message.mentions.channels.first()?.id
      if(!message.mentions.channels.first()) {
        bc = message.guild?.channels.cache.get(args[2])?.id
      }
      if(!bc) return await message.channel.send(`${error} Invalid channel`)
      db.set(`counter.${message.guild?.id}.bots`, bc)
      message.channel.send(`${tick} The bots counter has been set to <#${bc}>`)
    }
} 

export const help: HelpObj = {
  aliases: [''],
  category: 'Miscellaneous',
  desc: 'desc',
  togglable: false,
  usage: 'counter',
};

export const memberPerms: PermissionString[] = [];

export const permissions: PermissionString[] = [];