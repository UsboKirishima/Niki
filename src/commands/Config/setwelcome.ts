import type { HelpObj } from '../../structures/commandhandler';
import type ReknownClient from '../../structures/client';
import type { Message, PermissionString, User } from 'discord.js';
import { MessageEmbed } from 'discord.js';
import { error, tick, online, idle, dnd, offline } from '../../utils/emojis.json';
import moment from 'moment';
import * as db from 'quick.db'

export async function run(client: ReknownClient, message: Message, args: String[]) {
    if(!args.slice(1).join(" ")) {
        message.channel.send(new MessageEmbed()
            .setColor('RANDOM')
            .setAuthor('[SETWELCOME - HELP]')
            .setDescription(`
                    -ENABLE-
                    Type \`setwelcome on/off\`

                    ___________________________________________________

                    -WELCOME MESSAGE-
                    \`setwelcome message + [message]\`
                    Set welcome message.
                    
                    Here's a list of placeholders you can use;
                    {mention} - Mentions the user using @
                    {server} - The name of the current server
                    {username} - The nickname of the member that joined
                    {membercount} - The amount of members in the server

                    ___________________________________________________

                    -WELCOME CHANNEL-
                    \`setwelcome channel + [channel id/@]\`
                `)
            )
    }

        if(args[1].toLowerCase() == 'on') {
            if(!message.member?.hasPermission('MANAGE_GUILD')) return await message.channel.send(new MessageEmbed().setDescription(`${error} You can't use this command.`))
            if(db.get(`welcome.${message.guild?.id}.enable`) == true) return await message.channel.send(new MessageEmbed().setDescription(`${error} Welcome is already anabled.`))
            db.set(`welcome.${message.guild?.id}.enable`, true)
            await message.channel.send(new MessageEmbed().setDescription(`${tick} Welcome is now Enabled`))
        }
        if(args[1].toLowerCase() == 'off') {
            if(!message.member?.hasPermission('MANAGE_GUILD')) return await message.channel.send(new MessageEmbed().setDescription(`${error} You can't use this command.`))
            if(db.get(`welcome.${message.guild?.id}.enable`) == false) return await message.channel.send(new MessageEmbed().setDescription(`${error} Welcome is already disabled.`))
            db.set(`welcome.${message.guild?.id}.enable`, false)
            message.channel.send(new MessageEmbed().setDescription(`${tick} Welcome is now disabled.`))
            db.delete(`welcome.${message.guild?.id}.message`)
            db.delete(`welcome.${message.guild?.id}.channel`)
        }
        if(args[1].toLowerCase() == 'message') {
            if(!message.member?.hasPermission('MANAGE_GUILD')) return await message.channel.send(new MessageEmbed().setDescription(`${error} You can't use this command.`))
            if(db.get(`welcome.${message.guild?.id}.enable`) == false) return await message.channel.send(new MessageEmbed().setDescription(`${error} Enable Welcome with \`setwelcome enable\` first.`))
            if(!args.slice(2).join(" ")) return await message.channel.send(new MessageEmbed().setDescription(`${error} Please specify the message. \`setwelcome message + [MESSAGE]\``))
            db.push(`welcome.${message.guild?.id}.message`, args.slice(2).join(" "))
            await message.channel.send(new MessageEmbed().setDescription(`${tick} I have just set message.`))
        }
        if(args[1].toLowerCase() == 'channel') {
            if(!message.member?.hasPermission('MANAGE_GUILD')) return await message.channel.send(new MessageEmbed().setDescription(`${error} You can't use this command.`))
            if(!args[2]) return message.channel.send(new MessageEmbed().setDescription(`${error} Please provide a channel first. \`setwelcome channel + [channel id/@]\``))
            let chn;
            chn = message.mentions.channels.first()?.id 
            if(!chn) {
                chn = args[2]
            }
            db.set(`welcome.${message.guild?.id}.channel`, chn)
            await message.channel.send(new MessageEmbed().setDescription(`${tick} I have just set the Welcome channel (<#${chn}>).`))
        }
}

export const help: HelpObj = {
    aliases: [ 'welcome' ],
    category: 'Miscellaneous',
    desc: 'desc',
    togglable: false,
    usage: 'setwelcome'
};

export const memberPerms: PermissionString[] = [];

export const permissions: PermissionString[] = [];