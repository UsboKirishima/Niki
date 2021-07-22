import type ColumnTypes from '../typings/ColumnTypes';
import { MessageEmbed } from 'discord.js';
import type ReknownClient from '../structures/client';
import dateformat from 'dateformat';
import { tables } from '../Constants';
import type { TextChannel, Message, GuildChannel, Guild, GuildManager, User } from 'discord.js';
import * as db from 'quick.db'

export async function run (client: ReknownClient, guild: Guild) {
    let gg = guild.members.cache.get(`${client.user?.id}`)
    if(!gg?.hasPermission('ADMINISTRATOR')) await guild.owner?.send('Many functions will not work due to missing permissions, it is recommended to make the bot an administrator')

    let des = String.raw`
My prefix is: \`nik\`
For the list of commands type \`nik help\`
Join in the support server [***\`https://discord.gg/MnWqpWFFqZ\`***](https://discord.gg/MnWqpWFFqZ)
    `
    let joined_embed = new MessageEmbed()
    .setTitle(`:compass: THANKS FOR ADDING ME TO YOUR SERVER :compass:`)
    .setDescription(`
        My prefix is: \`nik\`
        For the list of commands type \`nik help\`
        Join in the support server [***\`https://discord.gg/MnWqpWFFqZ\`***](https://discord.gg/MnWqpWFFqZ)
    `)
    let sender: any = ``;
    guild.channels.cache.forEach((channel) => {
      if(channel.type == "text" && sender  == "") {
         sender = channel;
      }
    })
   sender.send(joined_embed)
    
}