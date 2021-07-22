import type { HelpObj } from '../../structures/commandhandler';
import type ReknownClient from '../../structures/client';
import type { Message, PermissionString, User } from 'discord.js';
import { MessageEmbed } from 'discord.js';
import { error, tick, online, idle, dnd, offline } from '../../utils/emojis.json';
import moment from 'moment';
import { UserFlagsString } from "discord.js";

export async function run (client: ReknownClient, message: Message, args: string[]) {
    const emojis = message.guild?.emojis.cache.map((e) => {
        return `${e} - \`:${e.name}:\``;
      });

      let ad: any = message.guild
    message.channel.send(new MessageEmbed().setAuthor('[EMOJIS] ' + message.guild?.name, ad.iconURL({ dynamic: true })).setDescription(emojis).setColor('RANDOM'))
}

export const help: HelpObj = {
    aliases: [ 'listemojis', 'emojislist', 'emojilist', 'listemoji' ],
    category: 'Miscellaneous',
    desc: 'desc',
    togglable: false,
    usage: 'emojis',
  };