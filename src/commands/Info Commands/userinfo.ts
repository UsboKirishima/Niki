import type { HelpObj } from '../../structures/commandhandler';
import type ReknownClient from '../../structures/client';
import type { Message, PermissionString, User } from 'discord.js';
import { MessageEmbed } from 'discord.js';
import { error, tick, online, idle, dnd, offline } from '../../utils/emojis.json';
import moment from 'moment';
import { UserFlagsString } from "discord.js";

export async function run (client: ReknownClient, message: Message, args: string[]) {

    var user;

    if(!args.slice(1).join(" ")) {
      user = message.member
    } else {
      user = message.mentions.members?.first()
      if(!user) {
      user = message.guild?.members.cache.get(args[1]) || message.guild?.members.cache.find(user => user.user.username.toLowerCase() == args.slice(1).join(" ")) || message.guild?.members.cache.find(user => user.user.tag.toLowerCase() == args.slice(1).join(" "))
      }
    }

    if(!user) return await message.channel.send(new MessageEmbed().setDescription(`${error} Invalid user.`))



    let status = user.user.presence.status
    let state = ''
    

    if(status == 'online') state = `${online} Online`
    if(status == 'idle') state = `${idle} Idle`
    if(status == 'dnd') state = `${dnd} Do Not Disturb`
    if(status == 'offline') state = `${offline} Offline`

    const flags: any = {
      DISCORD_EMPLOYEE: "<:discord_staff:858288062374608957>",
      PARTNERED_SERVER_OWNER: "<:server_partner:858288062361894914>",
      BUGHUNTER_LEVEL_1: "<:bug_hunter:858288061858185247>",
      BUGHUNTER_LEVEL_2: "<:bug_hunter:858288061858185247>",
      HYPESQUAD_EVENTS: "<:hypesquad_events:861710073343508491>",
      HOUSE_BRAVERY: "<:bravery:861709801788801025>",
      HOUSE_BALANCE: "<:balance:861709802379804692>",
      HOUSE_BRILLIANCE: "<:brillance:861709802577199114>",
      TEAM_USER: "<:discord_nitro:858288062303305748>",
      EARLY_SUPPORTER: "<:early_supporter:858288062461902858>",
      EARLY_VERIFIED_BOT_DEVELOPER: "<:early_developer:858288062538055700>",
      VERIFIED_BOT: "<:verified_bot:858288062476189697>",
      DISCORD_CERTIFIED_MODERATOR: "<:certified_moderator:861713146459586592>",
    };
    const userFlags: any = await user?.user.flags?.toArray();


    const usernfo_embed: any = new MessageEmbed()
    .setColor('RANDOM')
    .setAuthor(`[USERINFO] ${user?.user.tag}`, user?.user.displayAvatarURL({ dynamic: true, format: 'png' }))
    .setThumbnail(user.user.displayAvatarURL({ dynamic: true, format: 'png', size: 2048 }))
    .addField('👤Tag', user?.user.tag, true)
    .addField('🪧User ID', user?.user.id, true)
    .addField('✴️Status', state, true)
    .addField('🚮Account Created at', user?.user.createdAt.toDateString() + " (" + moment(user?.user.createdAt.getTime()).fromNow() + ")", false)
    .addField('🌆Avatar', `[LINK](${user.user.avatarURL({ dynamic: true, format: 'png', size: 2048 })})`, true)
    .addField('📲Last Message', `[Last Message](${user.user.lastMessage?.url})`, true)
    .setFooter(client.user?.username, client.user?.displayAvatarURL({ format: 'png' }))
    .setTimestamp()
    if(user.premiumSince) {
      usernfo_embed.addField('Nitro Boost', `Yes (${user.premiumSinceTimestamp})<:discord_nitro:858288062303305748><:nitro_boost:858288062546706443>`, true)
    } 
    if(!user.premiumSince) {
      usernfo_embed.addField('Nitro Boost', 'No', true)
    }

    if (userFlags.length > 0) usernfo_embed.addField('Badges', userFlags.map((flag: string | number) => flags[flag]).join(' '), true);


    message.channel.send(usernfo_embed)

}

export const help: HelpObj = {
  aliases: [ 'user' ],
  category: 'Miscellaneous',
  desc: 'desc',
  togglable: false,
  usage: 'userinfo',
};

export const memberPerms: PermissionString[] = [];

export const permissions: PermissionString[] = [];