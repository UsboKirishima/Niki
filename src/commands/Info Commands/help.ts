import type { HelpObj } from '../../structures/commandhandler';
import type ReknownClient from '../../structures/client';
import type { Message, PermissionString, User } from 'discord.js';
import { MessageEmbed } from 'discord.js';
import { error, tick, online, idle, dnd, offline } from '../../utils/emojis.json';
import moment from 'moment';

export async function run (client: ReknownClient, message: Message, args: string[]) {
    if(!args.slice(1).join(" ")) {
        let categories = new MessageEmbed()
            .setColor('#94c5e3')
            .setAuthor(`${client.user?.username}'s commands.`, client.user?.displayAvatarURL())
            .setDescription(`To view the commands in each group use:\n\`\`\`nik help <group>\`\`\``)
            .addField('⚒️Moderation', '7 commands.', true)
            .addField('🤖Automation', '3 commands.', true)
            .addField('❔Info', '8 commands.', true)
            .addField('😂Fun', '3 commands.', true)
            .addField('🐱‍🏍Roleplay', '40 commands.', true)

        message.channel.send(categories)
    } else if(args[1].toLowerCase() == 'moderation') {

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