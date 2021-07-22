import type { HelpObj } from '../../structures/commandhandler';
import type ReknownClient from '../../structures/client';
import type { Message, PermissionString, User } from 'discord.js';
import { MessageEmbed } from 'discord.js';
import { error, tick, online, idle, dnd, offline } from '../../utils/emojis.json';
import anime from '../../utils/anime.json'
import moment from 'moment';
import { UserFlagsString } from "discord.js";
 
export async function run (client: ReknownClient, message: Message, args: string[]) {
    let gg: any = message.guild?.iconURL({ dynamic: true })
    const guild = await message.guild?.fetch();
		const administrators = guild?.members.cache.filter((m) => m.hasPermission("ADMINISTRATOR") && !m.user.bot);
		const moderators = guild?.members.cache.filter((m) => !administrators?.has(m.id) && m.hasPermission("MANAGE_MESSAGES") && !m.user.bot);
		const embed = new MessageEmbed()
			.setAuthor(`[STAFF] ${message.guild?.name}`, gg)
            .addField('Administrator', administrators?.size ? administrators?.map((a) => `${a.user.tag}`).join("\n") : 'No Administrators')
			.addField('Moderators', moderators?.size ? moderators?.map((m) => `${m.user.tag}`).join("\n") : 'No Moderators') 
            .setColor('red')
            .setThumbnail(gg) 
		
		message.channel.send(embed);
} 

export const help: HelpObj = {
  aliases: [ 'admins', 'mods' ],
  category: 'Miscellaneous',
  desc: 'desc',
  togglable: false,
  usage: 'staff',
};

export const memberPerms: PermissionString[] = [];

export const permissions: PermissionString[] = [];