import type { HelpObj } from '../../structures/commandhandler';
import type ReknownClient from '../../structures/client';
import type { Message, PermissionString, User } from 'discord.js';
import { MessageEmbed } from 'discord.js';
import { error, tick, online, idle, dnd, offline } from '../../utils/emojis.json';
import moment from 'moment';
import { UserFlagsString } from "discord.js";

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

    message.channel.send(new MessageEmbed().setAuthor(`[AVATAR] ${user.user.tag}`).setImage(user.user.displayAvatarURL({ dynamic: true, format: 'png', size: 2048 })))
}

export const help: HelpObj = {
    aliases: [ 'av' ],
    category: 'Miscellaneous',
    desc: 'desc',
    togglable: false,
    usage: 'avatar',
  };
  
  export const memberPerms: PermissionString[] = [];
  
  export const permissions: PermissionString[] = [];