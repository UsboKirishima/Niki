import type { HelpObj } from '../../structures/commandhandler';
import type ReknownClient from '../../structures/client';
import type { Message, PermissionString, User } from 'discord.js';
import { MessageEmbed } from 'discord.js';
import { error, tick, online, idle, dnd, offline } from '../../utils/emojis.json';
import moment from 'moment';
const prefix: string = 'nik ';

export async function run (client: ReknownClient, message: Message, args: string[]) {
    if(!args.slice(1).join(" ")) {
        let categories = new MessageEmbed()
            .setColor('#94c5e3')
            .setAuthor(`${client.user?.username}'s commands.`, client.user?.displayAvatarURL())
            .setDescription(`To view the commands in each group use:\n\`\`\`nik help <group>\`\`\``)
            .addField('⚒️Moderation', '7 commands.', true)
            .addField('🤖Automation', '3 commands.', true)
            .addField('❔Info', '5 commands.', true)
            .addField('🎉Misc', '9 commands.', true)
            .addField('😂Fun', '3 commands.', true)
            .addField('🐱‍🏍Roleplay', '40 commands.', true)
            .addField('💞Ship', '1 commands.', true)
            .addField('⚔️ Together', '1 commands.', true)
            .addField('\u200b', '\u200b', true)

        message.channel.send(categories).then(async () => {
            message.channel.send("<:new1:873874917815357440><:new2:873874973750599720> Together commands out now!")
        })
    } else if(args[1].toLowerCase() == 'moderation') {
        let moderation = new MessageEmbed()
        .setAuthor(`${client.user?.username}'s commands.`, client.user?.displayAvatarURL())
        .setColor('#94c5e3')
        .setDescription(`
        \`${prefix}ban\` :: Ban a user.
        \`${prefix}softban\` :: Bans then unbans a member, which clears 7 days of messages.
        \`${prefix}kick\` :: Kick a user from the server.
        \`${prefix}nick\` :: Change the bot nickname.
        \`${prefix}giverole\` :: Give a role to a user.
        \`${prefix}takerole\` :: Remove a role to a user.
        \`${prefix}clear\` :: Delete messages with or without a filter.
        `)
        message.channel.send(moderation)
    } else if(args[1].toLowerCase() == 'automation') {
        let automation = new MessageEmbed()
        .setAuthor(`${client.user?.username}'s commands.`, client.user?.displayAvatarURL())
        .setColor('#94c5e3')
        .setDescription(`
        \`${prefix}welcome\` :: Set a welcome message & welcome channel.
        \`${prefix}autorole\` :: When a user join give a role.
        \`${prefix}counter\` :: Show Member & Bots count.
        `)
        message.channel.send(automation)
    } else if(args[1].toLowerCase() == 'info') {
        let info = new MessageEmbed()
        .setAuthor(`${client.user?.username}'s commands.`, client.user?.displayAvatarURL())
        .setColor('#94c5e3')
        .setDescription(`
        \`${prefix}userinfo\` :: Show the info of a user.
        \`${prefix}serverinfo\` :: Show the info of the server.
        \`${prefix}botinfo\` :: Show the info of Niki.
        \`${prefix}help\` :: Show all commands.
        \`${prefix}spotify\` :: Show song a user is listening to.
        `)
        message.channel.send(info)
    } else if(args[1].toLowerCase() == 'misc') {
        let misc = new MessageEmbed()
        .setAuthor(`${client.user?.username}'s commands.`, client.user?.displayAvatarURL())
        .setColor('#94c5e3')
        .setDescription(`
        \`${prefix}anime\` :: Generate a random anime.
        \`${prefix}avatar\` :: Show the avatar of a user.
        \`${prefix}djs\` :: Search something in the discord.js source code.
        \`${prefix}docs\` :: Search something in the discord.js docs.
        \`${prefix}emojis\` :: Show all emojis of the server.
        \`${prefix}invitegen\` :: Generate a invite of the server.
        \`${prefix}invite\` :: Show the bot invite.
        \`${prefix}ping\` :: Show the bot ping.
        \`${prefix}staff\` :: Show all moderator/Administrators of the server.
        `)
        message.channel.send(misc)
    } else if(args[1].toLowerCase() == 'fun') {
        let fun = new MessageEmbed()
        .setAuthor(`${client.user?.username}'s commands.`, client.user?.displayAvatarURL())
        .setColor('#94c5e3')
        .setDescription(`
        \`${prefix}8ball\` :: Ask a question and get an answer.
        \`${prefix}gay\` :: Show the gaymeter.
        \`${prefix}yn\` :: Ask a question and get an answer (Yes or No).
        `)
        message.channel.send(fun)
    } else if(args[1].toLowerCase() == 'roleplay') {
        let roleplay = new MessageEmbed()
        .setAuthor(`${client.user?.username}'s commands.`, client.user?.displayAvatarURL())
        .setColor('#94c5e3')
        .setDescription(`
        \`${prefix}baka\`
        \`${prefix}bite\`
        \`${prefix}blowkiss\` 
        \`${prefix}blush\`
        \`${prefix}boast\` 
        \`${prefix}bonk\` 
        \`${prefix}bored\` 
        \`${prefix}bye\`
        \`${prefix}cheer\`
        \`${prefix}confused\` 
        \`${prefix}cry\` 
        \`${prefix}cute\` 
        \`${prefix}dab\`
        \`${prefix}dance\` 
        \`${prefix}dead\` 
        \`${prefix}eat\`
        \`${prefix}facepalm\` 
        \`${prefix}fear\` 
        \`${prefix}feed\` 
        \`${prefix}fight\` 
        \`${prefix}glomp\`
        \`${prefix}goodmorning\` 
        \`${prefix}goodnight\`
        \`${prefix}grumpy\`
        \`${prefix}happy\`
        \`${prefix}hate\` 
        \`${prefix}hello\`
        \`${prefix}highfive\` 
        \`${prefix}hug\` 
        \`${prefix}kill\` 
        \`${prefix}kiss\`
        \`${prefix}laugh\` 
        \`${prefix}lewd\` 
        \`${prefix}lick\` 
        \`${prefix}love\` 
        \`${prefix}lurk\` 
        \`${prefix}mad\` 
        \`${prefix}no\` 
        \`${prefix}nom\` 
        \`${prefix}nope\`
        `)
        message.channel.send(roleplay)
    } else if(args[1].toLowerCase() == 'ship') {
        let ship = new MessageEmbed()
        .setAuthor(`${client.user?.username}'s commands.`, client.user?.displayAvatarURL())
        .setColor('#94c5e3')
        .setDescription(`
        \`${prefix}ship\` :: Shows the love between two people.
        `)
        message.channel.send(ship)
    } else if(args[1].toLowerCase() == 'together') {
        let ship = new MessageEmbed()
        .setAuthor(`${client.user?.username}'s commands.`, client.user?.displayAvatarURL())
        .setColor('#94c5e3')
        .setDescription(`
        \`${prefix}together\` :: Watch youtube & Play games.

        -- Type \`${prefix} together help\` for all options.
        `)
        message.channel.send(ship)
    }
    

}

export const help: HelpObj = {
    aliases: [ 'commands' ],
    category: 'Miscellaneous',
    desc: 'desc',
    togglable: false,
    usage: 'help'
  };
  
  export const memberPerms: PermissionString[] = [];
  
  export const permissions: PermissionString[] = [];
