import type { HelpObj } from '../../structures/commandhandler';
import type ReknownClient from '../../structures/client';
import type { Message, PermissionString, User } from 'discord.js';
import { MessageEmbed } from 'discord.js';
import { error, tick, online, idle, dnd, offline } from '../../utils/emojis.json';
import moment from 'moment';
import { UserFlagsString } from "discord.js";
import * as docs from "ghom-djs-docs"

export async function run (client: ReknownClient, message: Message, args: string[]) {
    let gg = (await message.guild?.channels.cache.get(message.channel.id)?.createInvite({ maxAge: 0, maxUses: 0 }))?.toString()
    message.channel.send(`New Invite for you! **${gg}**`)
}

export const help: HelpObj = {
    aliases: [ '' ],
    category: 'Miscellaneous',
    desc: 'desc',
    togglable: false,
    usage: 'invitegen',
  };
  
  export const memberPerms: PermissionString[] = [];
  
  export const permissions: PermissionString[] = [];