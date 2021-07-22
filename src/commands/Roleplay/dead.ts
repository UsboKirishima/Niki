import type { HelpObj } from '../../structures/commandhandler';
import type ReknownClient from '../../structures/client';
import type { Message, PermissionString, User } from 'discord.js';
import { MessageEmbed } from 'discord.js';
import { error, tick, online, idle, dnd, offline } from '../../utils/emojis.json';
import { links } from '../../utils/Roleplay/dead.json'

 
export async function run (client: ReknownClient, message: Message, args: string[]) {
    var user;

    if(!args.slice(1).join(" ")) {
      user = message.member
    } else {
      user = message.mentions.members?.first()
      if(!user) {
      user = message.guild?.members.cache.get(args[1]) || message.guild?.members.cache.find(user => user.user.username.toLowerCase() == args.slice(1).join(" ")) || message.guild?.members.cache.find(user => user.user.tag.toLowerCase() == args.slice(1).join(" "))
      }
    }

    if(!user) return await message.channel.send(new MessageEmbed().setDescription(`${error} Invalid user.`))

    const mathRandom = (number: number) => ~~(Math.random() * number);
    let gg = links[mathRandom(links.length)]
    message.channel.send(new MessageEmbed().setImage(gg).setDescription(`**${user.user.username}** is dead`).setColor('RANDOM'))
} 

export const help: HelpObj = {
  aliases: [''],
  category: 'Miscellaneous',
  desc: 'desc',
  togglable: false,
  usage: 'dead',
};

export const memberPerms: PermissionString[] = [];

export const permissions: PermissionString[] = [];