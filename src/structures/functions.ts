import type ColumnTypes from '../typings/ColumnTypes';
import type { GuildMessage } from '../Constants';
import type ReknownClient from './client';
import { URLSearchParams } from 'url';
import { embedColor } from '../config.json';
import fetch from 'node-fetch';
import type { CategoryChannel, ClientUser, Guild, GuildChannel, GuildMember, Message, PermissionString, Role, Snowflake, User, VoiceChannel } from 'discord.js';
import { Client, MessageEmbed, TextChannel, Util } from 'discord.js';
import { parsedPerms, tables } from '../Constants';

interface ParseMentionOptions {
  client?: Client;
  cType?: 'text' | 'voice' | 'category';
  guild?: Guild;
  type: 'member' | 'user' | 'role' | 'channel';
}

export class Functions {
  public badArg (message: Message | GuildMessage, argNum: number, desc: string): void {
    if (message.channel.type === 'text' && !message.channel.permissionsFor(message.guild!.me!)!.has('EMBED_LINKS')) {
      message.channel.send(`Argument **#${argNum}** was invalid. Here's what was wrong with it.\n\n**${desc}**`);
      return;
    }

    const embed = new MessageEmbed()
      .setColor(embedColor)
      .setDescription(`Argument #${argNum} is invalid. Here's what was wrong with it.\n\n**${desc}**`)
      .setFooter(`Executed by ${message.author.tag}`, message.author.displayAvatarURL())
      .setTimestamp()
      .setTitle(`Argument #${argNum} Incorrect`);

    message.channel.send(embed);
  }



  public formatNum (num: number): string {
    return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
  }

  public getFullTime (timeLeft: number): string {
    const s = Math.ceil(timeLeft / 1000 % 60);
    const m = Math.floor(timeLeft / (1000 * 60) % 60);
    const h = Math.floor(timeLeft / (1000 * 60 * 60) % 24);
    const d = Math.floor(timeLeft / (1000 * 60 * 60 * 24));

    return `${d}d ${h}h ${m}m ${s}s`;
  }







  public getTime (timeLeft: number): string {
    const s = Math.ceil(timeLeft / 1000 % 60);
    const m = Math.floor(timeLeft / (1000 * 60) % 60);
    const h = Math.floor(timeLeft / (1000 * 60 * 60));

    return `${h}h ${m}m ${s}s`;
  }

  public noArg (message: Message | GuildMessage, argNum: number, desc: string): void {
    if (message.channel.type === 'text' && !message.channel.permissionsFor(message.guild!.me!)!.has('EMBED_LINKS')) {
      message.channel.send(`Argument **#${argNum}** was missing. It is supposed to be **${desc}**`);
      return;
    }

    const embed = new MessageEmbed()
      .setColor(embedColor)
      .setDescription(`Argument #${argNum} is missing. It is supposed to be **${desc}**`)
      .setFooter(`Executed by ${message.author.tag}`, message.author.displayAvatarURL())
      .setTimestamp()
      .setTitle(`Argument #${argNum} Missing`);

    message.channel.send(embed);
  }

  public noClientPerms (message: Message, perms: PermissionString[], channel?: GuildChannel): void {
    const formatted = perms.map(p => `\`${parsedPerms[p as keyof typeof parsedPerms]}\``).join('\n');
    if (channel) return void message.channel.send(`I do not have the required permissions in ${channel.type === 'text' ? channel : `**${channel.name}**`}.\nThe permissions are:\n\n${formatted}`);
    message.channel.send(`I do not have the required permissions.\nThe permissions are:\n\n${formatted}`);
  }

  public noPerms (message: Message, perms: PermissionString[], channel?: GuildChannel): void {
    const formatted = perms.map(p => `\`${parsedPerms[p as keyof typeof parsedPerms]}\``).join('\n');
    if (channel) {
      message.channel.send(`You do not have the required permissions in ${channel.type === 'text' ? channel : `**${Util.escapeMarkdown(channel.name)}**`}.\nThe permissions are:\n\n${formatted}`);
      return;
    }

    message.channel.send(`You do not have the required permissions.\nThe permissions are:\n\n${formatted}`);
  }

  public parseArgs (str: string): string[] {
    const cmd = str.split(/\s+/)[0];
    str = str.slice(cmd.length);
    const regex = /"(.+?(?<!\\))"(?!\S)|(\S+)/gs;
    const matches = [ ...str.matchAll(regex) ].map(s => {
      const match = s[1] || s[0];
      if (match.includes(' ')) return match.replace(/\\"/gs, '"').replace(/\\ /gs, ' ');
      return match;
    });

    return [ cmd, ...matches ];
  }

  public parseMention (id: Snowflake, options: ParseMentionOptions & { cType?: 'text'; guild: Guild; type: 'channel' }): TextChannel | null;
  public parseMention (id: Snowflake, options: ParseMentionOptions & { cType?: 'voice'; guild: Guild; type: 'channel' }): VoiceChannel | null;
  public parseMention (id: Snowflake, options: ParseMentionOptions & { cType?: 'category'; guild: Guild; type: 'channel' }): CategoryChannel | null;
  public parseMention (id: Snowflake, options: ParseMentionOptions & { guild: Guild; type: 'member' }): Promise<GuildMember | null>;
  public parseMention (id: Snowflake, options: ParseMentionOptions & { guild: Guild; type: 'role' }): Role | null;
  public parseMention (id: Snowflake, options: ParseMentionOptions & { client: ReknownClient; type: 'user' }): Promise<User | null>;
  public parseMention (id: Snowflake, options: ParseMentionOptions): any {
    if (!parseInt(id) && !this.regexArr.some(regex => regex.test(id))) {
      if ([ 'member', 'user' ].includes(options.type)) return Promise.reject(null);
      return null;
    }

    let parsedId: string;
    if (!parseInt(id)) {
      parsedId = id.slice(2, -1);
      if (id.startsWith('<@!') || id.startsWith('<@&')) parsedId = id.slice(3, -1);
    } else parsedId = id;
    const cType = options.cType || 'text';

    switch (options.type) {
      case 'member': return options.guild!.members.fetch(parsedId);
      case 'user': return options.client!.users.fetch(parsedId);
      case 'role': return options.guild!.roles.cache.get(parsedId);
      case 'channel': return options.guild!.channels.cache.find(c => c.id === parsedId && c.type === cType);
      default: return false;
    }
  }





 

  public uppercase (str: string): string {
    return str[0].toUpperCase() + str.slice(1);
  }

  private regexArr = [ /<@!?(\d{17,19})>/, /<@&(\d{17,19})>/, /<#(\d{17,19})>/ ];
}
