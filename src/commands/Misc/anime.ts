import type { HelpObj } from '../../structures/commandhandler';
import type ReknownClient from '../../structures/client';
import type { Message, PermissionString, User } from 'discord.js';
import { MessageEmbed } from 'discord.js';
import { error, tick, online, idle, dnd, offline } from '../../utils/emojis.json';
import anime from '../../utils/anime.json'
import moment from 'moment';
import { UserFlagsString } from "discord.js";
 
export async function run (client: ReknownClient, message: Message, args: string[]) {
    const mathRandom = (number: number) => ~~(Math.random() * number);
    let gg = anime[mathRandom(anime.length)]
    message.channel.send(new MessageEmbed().setAuthor(`[ANIME] ${message.author.tag}`).setImage(gg).setColor('RANDOM'))
} 

export const help: HelpObj = {
  aliases: [ 'cartoon', 'sadanime', 'gifanime', 'randomanime' ],
  category: 'Miscellaneous',
  desc: 'desc',
  togglable: false,
  usage: 'anime',
};

export const memberPerms: PermissionString[] = [];

export const permissions: PermissionString[] = [];