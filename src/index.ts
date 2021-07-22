/* eslint-disable @typescript-eslint/no-var-requires, global-require */


import type { ClientEvents } from 'discord.js';
import ReknownClient from './structures/client';
//require("discord-buttons")(ReknownClient)
import { readdirSync } from 'fs';
import { version } from './config.json';
import { MessageEmbed } from 'discord.js';
import { MongoClient } from 'mongodb'
import * as db from 'quick.db'
import mongoose from 'mongoose'


const client = new ReknownClient({
  disableMentions: 'everyone',
  partials: [ 'GUILD_MEMBER', 'MESSAGE', 'REACTION', 'USER' ],
  presence: {
    activity: {
      name: `${version}`,
      type: 'PLAYING'
    }
  }
});

const eventList = readdirSync('./dist/events');
eventList.forEach(f => client.events.set(f.slice(0, -3), require(`./events/${f}`)));
client.events.forEach((obj, name) => client.on(name as keyof ClientEvents, (...args: any) => obj.run(client, ...args)));


process.on('unhandledRejection', console.log);




client.on('message', async message => {
  if(message.content == `<@${client.user?.id}>` || message.content == `<@!${client.user?.id}>`) {
    message.channel.send(new MessageEmbed()
      .setColor('RANDOM')
      .setAuthor('Niki', client.user?.displayAvatarURL({ format: 'png' }))
      .setDescription(`
Hello ${message.guild?.name}!
I'm Niki, a discord bot made in Typescript - Online 24/7

My prefix is **nik**
Join in the support server [__***dsc.gg/MagicPoison***__](https://www.dsc.gg/magicpoison)

**My info**

- Owner: *usbo#9999*
- OS: *Arch Linux*
- Version: *Beta*
- Libraries: *Discord.js V13, discord-akairo v8.1*
- Node: v14.16.0
- Yarn: 1.22.10
- Cpu: Intel® Core™ i5-9600K 4,90 GHz
- Memory: 14,7Gb (16Gb RAM)
- Ping: ${client.ws.ping}ms (WS Client)
- Internet Upload: 13Mbit/s 
:cherry_blossom:                              :cherry_blossom:
`)
    )
    return;
  }
})



client.on('guildMemberAdd', member => {
  let enable = db.get(`welcome.${member.guild?.id}.enable`)
    let channel = db.get(`welcome.${member.guild?.id}.channel`)
    let welmessage = db.get(`welcome.${member.guild?.id}.message`)

    if(enable == null || enable == undefined || enable == false) return;
    let ChannelFind: any = member.guild.channels.cache.get(channel)
    if(!ChannelFind) return;

    let memberL: any = member
    const uname: any = member.user?.username
    const count: any = member.guild.memberCount
    
    const mseg = `${welmessage}`
    .replace(/{mention}/g, memberL)
    .replace(/{server}/g, member.guild.name)
    .replace(/{username}/g, uname)
    .replace(/{memberCount}/g, count)


    
    ChannelFind.send(mseg)
})


//MongoDb Gay




client.login('ODU1MTc4OTczMDI4Njc5Njkw.YMutew.tUTTxchTvOdL6EoTTNaVi4vZZZ8');
//client.login('ODQ4NjE2NTA5NzY1MTg5NjQy.YLPNtg.UGPF1-5Aj_3OvHd6eAI402xIGSg');