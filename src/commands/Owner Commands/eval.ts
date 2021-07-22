import type { HelpObj } from '../../structures/commandhandler';
import type ReknownClient from '../../structures/client';
import type { Message, PermissionString } from 'discord.js';
import { MessageEmbed } from 'discord.js'
import 'discord-reply'
import { inspect } from 'util';

export async function run (client: ReknownClient, message: Message, args: string[]) {
    if(message.author.id !== '848463685374443530') return message.channel.send(`You can\'t use this command -_-!'`)

    const input = args.slice(1).join(" ")
    if(!input) return message.channel.send(`<:xeli:847843098746552331> | Please provide a output.`)
    if(input == 'client.destroy()' || input == 'process.exit(1)' || input == 'client.login()') return message.channel.send('ahahahahahahaahahahahahahahahahaahah Fuck u -_-')
    try {
        const result = await eval(input)
        let output = result
        if(typeof result !== 'string') {
            output = inspect(result)
        }

        const embed: any = new MessageEmbed()
        .setColor('#00000')
        .addField('Eval Input', `\`\`\`${args.slice(1).join(" ")}\`\`\``)
        .addField('Eval Output', `\`\`\`ts\n${output}\`\`\``)
        .addField('Eval Type', `\`\`\`${typeof result}\`\`\``)
        message.channel.send(embed)
    } catch(error) {
        //console.log(error)
        let lol: any = new MessageEmbed()
        .setDescription("```ts\n" + error + "```")
        message.channel.send(lol)
    }
}

export const help: HelpObj = {
  aliases: [ 'ev' ],
  category: 'Miscellaneous',
  desc: 'desc',
  togglable: false,
  usage: 'eval'
};

export const memberPerms: PermissionString[] = [];

export const permissions: PermissionString[] = [];