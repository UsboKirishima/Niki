import type { HelpObj } from '../../structures/commandhandler';
import type ReknownClient from '../../structures/client';
import type { Message, PermissionString, User } from 'discord.js';
import { MessageEmbed } from 'discord.js';
import { error, tick, online, idle, dnd, offline } from '../../utils/emojis.json';
import moment from 'moment';

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
    const spotify = user.presence.activities.find(
		(value) => value.name.toLowerCase() == 'spotify'
	);
	if (!spotify)
		return message.channel.send(
			new MessageEmbed()
				.setDescription(`${user.user.tag} isn't listening to Spotify.`)
		);
	return message.channel.send(new MessageEmbed()
                .setTitle(spotify.details)
                .setDescription(`by **${spotify.state}** on **${
					spotify.assets?.largeText ??
					"apparently unknown? Discord didn't display the data correctly"
				}**`)
                .setThumbnail(`https://i.scdn.co/image/${spotify.assets?.largeImage?.slice(8)}`)
                .setColor('RANDOM')
	);
}

export const help: HelpObj = {
    aliases: [ 'song' ],
    category: 'Miscellaneous',
    desc: 'desc',
    togglable: false,
    usage: 'spotify',
  };
  
  export const memberPerms: PermissionString[] = [];
  
  export const permissions: PermissionString[] = [];