import type { HelpObj } from '../../structures/commandhandler';
import type ReknownClient from '../../structures/client';
import type { Message, PermissionString } from 'discord.js';
import { MessageEmbed } from 'discord.js'
import { developer } from '../../utils/emojis.json'

export async function run (client: ReknownClient, message: Message, args: string[]) {
    if(message.author.id !== '848463685374443530') return message.channel.send(`You can\'t use this command -_-!'`)


    const gg = new Date(Date.now())
    const date1 = gg.getDate();
    const date2 = gg.getMonth()
    const date3 = gg.getFullYear()

    let embed = new MessageEmbed()
    .setColor('RANDOM')
    .setAuthor(`[TEST]`, client.user?.displayAvatarURL())
    .addField(':stopwatch: Ping', client.ws.ping + "ms", true)
    .addField(':calendar: Date', `${date1}/${date2}/${date3}`, true)
    .addField(`${developer} Developer`, 'usbo#9999', true)
    .addField('First args', args.slice(2).join(" "), true)

    message.channel.send(embed)
}


export const help: HelpObj = {
    aliases: [''],
    category: 'Miscellaneous',
    desc: 'desc',
    togglable: false,
    usage: 'test',
    dm: true
  };
