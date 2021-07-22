import type { HelpObj } from '../../structures/commandhandler';
import type ReknownClient from '../../structures/client';
import type { Message, PermissionString, User } from 'discord.js';
import { MessageEmbed } from 'discord.js';
import { error, tick, online, idle, dnd, offline } from '../../utils/emojis.json';
import moment from 'moment';
import { UserFlagsString } from "discord.js";
import * as docs from "ghom-djs-docs"

export async function run (client: ReknownClient, message: Message, args: string[]) {
    let what: any = args.slice(1).join(" ")
    if(!what) return await message.channel.send(new MessageEmbed().setDescription(`${error} Specify a djs functions.`))
    const someProp: any = await docs.search("stable", what)


    let embed = new MessageEmbed()
    .setColor('RANDOM')
    .setAuthor('[DJS SRC]')
    .addField('Input Search', "```" + what + "```")
    .addField('Type Search', "```" + docs.flatTypeDescription(someProp.type) + "```")
    .addField('Docs Link', `**[${docs.buildURL('stable', someProp)}](${docs.buildURL('stable', someProp)})**`)
        message.channel.send(embed)
    
}

export const help: HelpObj = {
    aliases: [ '' ],
    category: 'Miscellaneous',
    desc: 'desc',
    togglable: false,
    usage: 'djs',
  };
  
  export const memberPerms: PermissionString[] = [];
  
  export const permissions: PermissionString[] = [];