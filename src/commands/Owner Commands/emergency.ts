import type { HelpObj } from '../../structures/commandhandler';
import type ReknownClient from '../../structures/client';
import type { Message, PermissionString } from 'discord.js';
import { MessageEmbed } from 'discord.js'
import { developer, alarm } from '../../utils/emojis.json'
import * as db from 'quick.db'

export async function run (client: ReknownClient, message: Message, args: string[]) {
    if(message.author.id !== '848463685374443530') return message.channel.send(`You can\'t use this command -_-!'`)

    message.channel.send(`${alarm} Emergency mode is now active!`)
    let emmode = db.get('emergencymode')
    if(emmode == true) return db.set('emergencymod', false), message.channel.send('Emergency mode is now disabled')
    else {
    client.user?.setActivity('Connecting...')
    db.set('emergencymod', true)
    }
}


export const help: HelpObj = {
    aliases: [''],
    category: 'Miscellaneous',
    desc: 'desc',
    togglable: false,
    usage: 'emergency'
  };