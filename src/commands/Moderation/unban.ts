import type { HelpObj } from '../../structures/commandhandler';
import type ReknownClient from '../../structures/client';
import type { Message, PermissionString, User } from 'discord.js';
import { MessageEmbed } from 'discord.js';
import { error, tick, online, idle, dnd, offline } from '../../utils/emojis.json';


 
export async function run (client: ReknownClient, message: Message, args: any) {
    if(!message.guild?.me?.hasPermission('BAN_MEMBERS')) return await message.channel.send(new MessageEmbed().setDescription(`${error} I can't use this commands.\n\nPlease give me BAN_MEMBERS permissions.`))
    if(!message.member?.hasPermission('BAN_MEMBERS')) return await message.channel.send(new MessageEmbed().setDescription(`${error} You can't user this command.`))
    
    let user: any;

		if(!args[0]){
			return message.channel.send(new MessageEmbed().setDescription(`${error} Invalid User`));
		}
        const gg: any = client.users 
		// Check if the arg is an ID or a username
		const isId = !isNaN(args[1]);

		if(isId){
			// Try to find a user with that ID
			await client.users.fetch(args[1]).then((u) => {
				// if a user was found
				user = u;
			}).catch(() => {});
		} else if(!isId) {
			const arr = args[1].split("#");
			if(arr.length < 2){
				return message.channel.send(new MessageEmbed().setDescription(`${error} User not found`))
			}
			user = gg.filter((u: any) => u.username === arr[1]).find((u: any) => u.discriminator === arr[1]);
		}

    //if(!user) return await message.channel.send(new MessageEmbed().setDescription(`${error} Invalid user.`))
    const banned = await message.guild.fetchBans();
	if(!banned.some((e) => e.user.id === user.user.id)) return await message.channel.send(new MessageEmbed().setDescription(`${error} This user isn't banned.`))


    let hh: any = message.guild
    let embed = new MessageEmbed()
    .setAuthor(user.user.tag + ' Has been Unbanned!', user.user.displayAvatarURL({ dynamic: true }))
    .addField('🏘️Server', `\`\`\`${message.guild.name}\`\`\``, true)
    .addField('<:discord_staff:858288062374608957> Moderator', `\`\`\`${message.author.tag}\`\`\``, true)
    .setFooter('[UNBAN]', hh.iconURL({ dynamic: true }))
    .setTimestamp()

    message.delete()
    message.channel.send(embed)
    message.guild.members.unban(user)
    user.send(embed)
    
} 

export const help: HelpObj = {
  aliases: [''],
  category: 'Miscellaneous',
  desc: 'desc',
  togglable: false,
  usage: 'unban',
};

export const memberPerms: PermissionString[] = [];

export const permissions: PermissionString[] = [];