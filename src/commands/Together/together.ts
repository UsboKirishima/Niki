import type { HelpObj } from '../../structures/commandhandler';
import type ReknownClient from '../../structures/client';
import { Message, PermissionString, User } from 'discord.js';
import { MessageEmbed, MessageAttachment } from 'discord.js';
import { error, tick, online, idle, dnd, offline } from '../../utils/emojis.json';
import { DiscordTogether } from 'discord-together';




export async function run (client: ReknownClient, message: Message, args: string[]) {
    const discordTogether = new DiscordTogether(client);
    if(!args.slice(1).join(" ") || args[1].toLowerCase() == 'help') {
        let embed = new MessageEmbed()
        .setColor('RANDOM')
        .setAuthor(`[TOGETHER] ${message.author.tag}`, message.author.displayAvatarURL({ dynamic: true }))
        .setDescription(`
        --***DISCORD TOGETHER***--

        **--Youtube**
        **-** \`nik together [youtube] [Vchannel @/id]\`
        
        **--Poker**
        **-** \`nik together [poker] [Vchannel @/id]\`

        **--Chess**
        **-** \`nik together [chess] [Vchannel @/id]\`

        **--Betrayal**
        **-** \`nik together [betrayal] [Vchannel @/id]\`

        **--Fishing**
        **-** \`nik together [fishing] [Vchannel @/id]\`
        `)
        message.channel.send(embed)
    } else if(args[1].toLowerCase() == 'youtube') {
        var chn;

        if(!args.slice(2).join(" ")) {
            return await message.channel.send(new MessageEmbed().setDescription(`${error} Invalid channel.`))
        } else {
            chn = message.mentions.channels?.first()?.id
        if(!chn) {
            chn = message.guild?.channels.cache.get(args[2])?.id
        }
        }

        if(!chn) return await message.channel.send(new MessageEmbed().setDescription(`${error} Invalid channel.`))
        if(message.guild?.channels.cache.get(chn)?.type !== 'voice') return message.channel.send(new MessageEmbed().setDescription(`${error} Please provide a **voice** channel.`))
        discordTogether.createTogetherCode(chn, 'youtube').then((x) => {
            message.channel.send(
                new MessageEmbed()
                .setColor('RANDOM')
                .setAuthor(`[TOGETHER] ${message.author.tag}`, message.author.displayAvatarURL({ dynamic: true }))
                .setDescription(`[CLICK HERE TO WATCH YOUTUBE](${x.code})`)
            )
        })
    } else if(args[1].toLowerCase() == 'poker') {
        var chn;

        if(!args.slice(2).join(" ")) {
            return await message.channel.send(new MessageEmbed().setDescription(`${error} Invalid channel.`))
        } else {
            chn = message.mentions.channels?.first()?.id
        if(!chn) {
            chn = message.guild?.channels.cache.get(args[2])?.id
        }
        }

        if(!chn) return await message.channel.send(new MessageEmbed().setDescription(`${error} Invalid channel.`))
        if(message.guild?.channels.cache.get(chn)?.type !== 'voice') return message.channel.send(new MessageEmbed().setDescription(`${error} Please provide a **voice** channel.`))
        discordTogether.createTogetherCode(chn, 'poker').then((x) => {
            message.channel.send(
                new MessageEmbed()
                .setColor('RANDOM')
                .setAuthor(`[TOGETHER] ${message.author.tag}`, message.author.displayAvatarURL({ dynamic: true }))
                .setDescription(`[CLICK HERE TO PLAY POKER](${x.code})`)
            )
        })
    } else if(args[1].toLowerCase() == 'chess') {
        var chn;

        if(!args.slice(2).join(" ")) {
            return await message.channel.send(new MessageEmbed().setDescription(`${error} Invalid channel.`))
        } else {
            chn = message.mentions.channels?.first()?.id
        if(!chn) {
            chn = message.guild?.channels.cache.get(args[2])?.id
        }
        }

        if(!chn) return await message.channel.send(new MessageEmbed().setDescription(`${error} Invalid channel.`))
        if(message.guild?.channels.cache.get(chn)?.type !== 'voice') return message.channel.send(new MessageEmbed().setDescription(`${error} Please provide a **voice** channel.`))
        discordTogether.createTogetherCode(chn, 'chess').then((x) => {
            message.channel.send(
                new MessageEmbed()
                .setColor('RANDOM')
                .setAuthor(`[TOGETHER] ${message.author.tag}`, message.author.displayAvatarURL({ dynamic: true }))
                .setDescription(`[CLICK HERE TO PLAY CHESS](${x.code})`)
            )
        })
    } else if(args[1].toLowerCase() == 'betrayal') {
        var chn;

        if(!args.slice(2).join(" ")) {
            return await message.channel.send(new MessageEmbed().setDescription(`${error} Invalid channel.`))
        } else {
            chn = message.mentions.channels?.first()?.id
        if(!chn) {
            chn = message.guild?.channels.cache.get(args[2])?.id
        }
        }

        if(!chn) return await message.channel.send(new MessageEmbed().setDescription(`${error} Invalid channel.`))
        if(message.guild?.channels.cache.get(chn)?.type !== 'voice') return message.channel.send(new MessageEmbed().setDescription(`${error} Please provide a **voice** channel.`))
        discordTogether.createTogetherCode(chn, 'betrayal').then((x) => {
            message.channel.send(
                new MessageEmbed()
                .setColor('RANDOM')
                .setAuthor(`[TOGETHER] ${message.author.tag}`, message.author.displayAvatarURL({ dynamic: true }))
                .setDescription(`[CLICK HERE TO PLAY BETRAYAL](${x.code})`)
            )
        })
    } else if(args[1].toLowerCase() == 'fishing') {
        var chn;

        if(!args.slice(2).join(" ")) {
            return await message.channel.send(new MessageEmbed().setDescription(`${error} Invalid channel.`))
        } else {
            chn = message.mentions.channels?.first()?.id
        if(!chn) {
            chn = message.guild?.channels.cache.get(args[2])?.id
        }
        }

        if(!chn) return await message.channel.send(new MessageEmbed().setDescription(`${error} Invalid channel.`))
        if(message.guild?.channels.cache.get(chn)?.type !== 'voice') return message.channel.send(new MessageEmbed().setDescription(`${error} Please provide a **voice** channel.`))
        discordTogether.createTogetherCode(chn, 'fishing').then((x) => {
            message.channel.send(
                new MessageEmbed()
                .setColor('RANDOM')
                .setAuthor(`[TOGETHER] ${message.author.tag}`, message.author.displayAvatarURL({ dynamic: true }))
                .setDescription(`[CLICK HERE TO PLAY FISHING](${x.code})`)
            )
        })
    }
}

export const help: HelpObj = {
    aliases: ['tog'],
    category: 'Miscellaneous',
    desc: 'desc',
    togglable: false,
    usage: 'together'
  };
  
  export const memberPerms: PermissionString[] = [];
  
  export const permissions: PermissionString[] = [];

