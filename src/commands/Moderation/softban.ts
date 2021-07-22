import type { HelpObj } from '../../structures/commandhandler';
import type ReknownClient from '../../structures/client';
import type { Message, PermissionString, User } from 'discord.js';
import { MessageEmbed } from 'discord.js';
import { error, tick, online, idle, dnd, offline } from '../../utils/emojis.json';


 
export async function run (client: ReknownClient, message: Message, args: string[]) {
    if(!message.guild?.me?.hasPermission('BAN_MEMBERS')) return await message.channel.send(new MessageEmbed().setDescription(`${error} I can't use this commands.\n\nPlease give me BAN_MEMBERS permissions.`))
    if(!message.member?.hasPermission('BAN_MEMBERS')) return await message.channel.send(new MessageEmbed().setDescription(`${error} You can't user this command.`))
    var user: any;

    if(!args.slice(1).join(" ")) {
        return await message.channel.send(new MessageEmbed().setDescription(`${error} Invalid user.`))
    } else {
      user = message.mentions.members?.first()
      if(!user) {
      user = message.guild?.members.cache.get(args[1]) || message.guild?.members.cache.find(user => user.user.username.toLowerCase() == args[1]) || message.guild?.members.cache.find(user => user.user.tag.toLowerCase() == args[1])
      }
    }

    if(!user) return await message.channel.send(new MessageEmbed().setDescription(`${error} Invalid user.`))
    if(user.hasPermission('ADMINISTRATOR')) return await message.channel.send(new MessageEmbed().setDescription(`${error} You can't softban a Moderator.`))

    let reason;
    reason = args.slice(2).join(" ")
    if(!reason) {
        reason = 'No reason provided.'
    }

    let hh: any = message.guild
    let embed = new MessageEmbed()
    .setAuthor(user.user.tag + ' Has been Softbanned!', user.user.displayAvatarURL({ dynamic: true }))
    .addField('🏘️Server', `\`\`\`${message.guild.name}\`\`\``, true)
    .addField('<:discord_staff:858288062374608957> Moderator', `\`\`\`${message.author.tag}\`\`\``, true)
    .addField('📑Reason', `\`\`\`${reason}\`\`\``, true)
    .setFooter('[SOFTBAN]', hh.iconURL({ dynamic: true }))
    .setTimestamp()

    message.delete()
    message.channel.send(embed)
    user.ban({ reason: `${reason}`, days: 7 }).then(() => {
        message.guild?.members.unban(user)
    })
    user.send(embed)
    
} 

export const help: HelpObj = {
  aliases: ['sban'],
  category: 'Miscellaneous',
  desc: 'desc',
  togglable: false,
  usage: 'softban',
};

export const memberPerms: PermissionString[] = [];

export const permissions: PermissionString[] = [];