import type { HelpObj } from '../../structures/commandhandler';
import type ReknownClient from '../../structures/client';
import type { Message, PermissionString, User } from 'discord.js';
import { MessageEmbed } from 'discord.js';
import { error, tick, online, idle, dnd, offline } from '../../utils/emojis.json';
import anime from '../../utils/anime.json'
import moment from 'moment';
import { UserFlagsString } from "discord.js";
import fetch from 'node-fetch';
 
export async function run (client: ReknownClient, message: Message, args: string[]) {
        const query = args.slice(1).join(' ')
        if(!query) return message.reply('Please Provide A Query To Search For.') // If No Query Is Searched
        const url = 'https://djsdocs.sorta.moe/v2/embed?src=stable&q=' + query // From Here BOT Will Send Docs. // <v2> Can Be Chnaged To <v1> // <stable> Can Be Changed To <master>

        let response
        try {
            response = await fetch(url).then(res => res.json())
        }
        catch (e) {
            return message.reply('An Error Occured, Try Again Later.')    
        }

        const pkg = response
        const embed = new MessageEmbed()
        .setColor('RANDOM')
        .setThumbnail('https://cdn.discordapp.com/emojis/586438523796848640.png?v=1') // We Will Keep Discord.JS Thumbnail // You Can Keep Any Thumbnail
        .setAuthor(pkg.author.name, pkg.author.icon_url)
        .setDescription(pkg.description)
        .setTimestamp()
        // .setFooter(`Requested By`)
        // If The Docs Searched Has Fields
        if(pkg.fields) {embed.addFields(pkg.fields)}
        // If The Docs Searched Has Title
        if(pkg.title) {embed.setTitle(pkg.title)}
        message.channel.send(embed)


} 

export const help: HelpObj = {
  aliases: [ 'doc' ],
  category: 'Miscellaneous',
  desc: 'desc',
  togglable: false,
  usage: 'docs',
};

export const memberPerms: PermissionString[] = [];

export const permissions: PermissionString[] = [];