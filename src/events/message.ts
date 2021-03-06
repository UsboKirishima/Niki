import type ColumnTypes from '../typings/ColumnTypes';
import { Message, MessageEmbed } from 'discord.js';
import type ReknownClient from '../structures/client';
import { tables } from '../Constants';
import { error } from '../utils/emojis.json'
import * as db from 'quick.db'
import moment from 'moment'

const cooldowns = new Set();

export async function run (client: ReknownClient, message: Message) {
  if (message.author.bot || message.guild && !message.guild.available) return;
  


  const prefix = 'nik ' || 'n!'
  const regexp = new RegExp(`^<@!?${message.client.user!.id}> `);
  if (!message.content.toLowerCase().startsWith(prefix) && !message.content.match(regexp) || message.content.toLowerCase() === prefix) return;
  
  
  

  let str: string;
  if (message.content.match(regexp)) str = message.content.slice(message.content.match(regexp)![0].length);
  else str = message.content.slice(prefix.length);

  const args = client.functions.parseArgs(str);
  let cmd = args[0].toLowerCase()
  if (!Object.keys(client.commands.aliases).includes(cmd)) return;

  if (message.guild && message.channel.type === 'text') {
    if (!message.channel.permissionsFor(client.user!)!.has([ 'SEND_MESSAGES' ])) return;
    if (cooldowns.has(message.guild.id)) return;
    cooldowns.add(message.guild.id);
    setTimeout(() => cooldowns.delete(message.guild!.id), 75);
  }

  cmd = client.commands.aliases[cmd];
  

  const cmdInfo = client.commands.get(cmd)!;
  if (message.channel.type === 'dm') {
    if (!cmdInfo.help.dm) return message.reply(`${error} This command is only available in servers.`);
  } else if (!message.channel.permissionsFor(message.member!)!.has(cmdInfo.memberPerms)) return client.functions.noPerms(message, cmdInfo.memberPerms, message.channel);
  else if (!message.channel.permissionsFor(client.user!)!.has(cmdInfo.permissions)) return client.functions.noClientPerms(message, cmdInfo.permissions, message.channel);
  else if (cmdInfo.help.private && message.author.id !== client.config.ownerID) return;
  message.channel.send('**Niki has ended its service. Learn more here: https://discord.gg/yKFZArAyY9**');
  //cmdInfo.run(client, message, args);


  
}
