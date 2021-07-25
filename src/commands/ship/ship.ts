import type { HelpObj } from '../../structures/commandhandler';
import type ReknownClient from '../../structures/client';
import type { Message, PermissionString, User } from 'discord.js';
import { MessageEmbed, MessageAttachment } from 'discord.js';
import { error, tick, online, idle, dnd, offline } from '../../utils/emojis.json';
import moment from 'moment';
import { createCanvas, registerFont, loadImage } from 'canvas';
import path from 'path'

export async function run (client: ReknownClient, message: Message, args: string[]) {
    if(!args.slice(1).join(' ')) {
        let embed = new MessageEmbed()
        .setColor('RANDOM')
        .setAuthor('[HELP -SHIP]', client.user?.displayAvatarURL())
        .setDescription("```nik ship @user @user```")
        message.channel.send(embed)
    } else {
        var user1;

        if(!args.slice(1).join(" ")) {
            return await message.channel.send(new MessageEmbed().setDescription(`${error} Invalid user.`))
        } else {
        user1 = message.mentions.members?.first()
        if(!user1) {
            user1 = message.guild?.members.cache.get(args[1]) 
        }
        }

        if(!user1) return await message.channel.send(new MessageEmbed().setDescription(`${error} Invalid user.`))

        var user2;

        if(!args.slice(2).join(" ")) {
            return await message.channel.send(new MessageEmbed().setDescription(`${error} Invalid user.`))
        } else {
        user2 = message.mentions.members?.last()
        if(!user2) {
            user2 = message.guild?.members.cache.get(args[2]) 
        }
        }

        if(!user2) return await message.channel.send(new MessageEmbed().setDescription(`${error} Mention two users.\n\n\`\`\`ship @user @user\`\`\``))



        //canvas 

/*
        registerFont(path.join(__dirname, '../../../assets/Fonts/Tangerine-Bold.ttf'), { family: 'Tangerine' })
        const canvas = createCanvas(3000, 1641)
        const ctx = canvas.getContext('2d')

        const background = await loadImage(
            path.join(__dirname, '../../../assets/images/blackground.png')
        )
        let x = 0
        let y = 0
        ctx.drawImage(background, x, y)
        ctx.arc(125,120,100,0,2*Math.PI);
        ctx.fillStyle = '#ff0040'
        ctx.font = '200px "Arial"'
        let text = `${Math.floor(Math.random() * (100 - 1)) + 1}%`
        x = canvas.width / 2 - ctx.measureText(text).width / 2
        y = canvas.height / 2 
        ctx.fillText(text, x, y)

        const us1 = await loadImage(
            user1.user.displayAvatarURL({ dynamic: false, format: 'png', size: 2048 })
        )
        const us2 = await loadImage(
            user2.user.displayAvatarURL({ dynamic: false, format: 'png', size: 2048 })
        )
        y = canvas.height / 2 - 350
        ctx.arc(x, y, 3000, 0, Math.PI * 2)
        ctx.clip()
        ctx.drawImage(us1, 300, y, 700, 700)
        ctx.drawImage(us2, 2000, y, 700, 700)

        const attachment = new MessageAttachment(canvas.toBuffer())
        message.channel.send(attachment)*/
        let embedl = new MessageEmbed()
        .setColor('#ff0040')
        .setAuthor(`[SHIP] ${user1.user.tag} + ${user2.user.tag}`)
        .setDescription(`${user1.user.username} + ${user2.user.username} = ${Math.floor(Math.random() * (100 - 1)) + 1}% :heart:`)
        message.channel.send(embedl)
    }
}

export const help: HelpObj = {
    aliases: [ 'love' ],
    category: 'Miscellaneous',
    desc: 'desc',
    togglable: false,
    usage: 'ship'
  };
  
  export const memberPerms: PermissionString[] = [];
  
  export const permissions: PermissionString[] = [];

function radius(x: number, y: number, radius: any, arg3: number, arg4: number) {
    throw new Error('Function not implemented.');
}
