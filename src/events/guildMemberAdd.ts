import type ColumnTypes from '../typings/ColumnTypes';
import { MessageEmbed } from 'discord.js';
import type ReknownClient from '../structures/client';
import dateformat from 'dateformat';
import { tables } from '../Constants';
import type { GuildMember, TextChannel, Message, GuildChannel } from 'discord.js';
import * as db from 'quick.db'


export async function run(client: ReknownClient, member: GuildMember, message: Message) {






    if(!db.get(`counter.${member.guild.id}`)) return;
    let amember = db.get(`counter.${member.guild.id}.amembers`)
    let memberD = db.get(`counter.${member.guild.id}.members`)
    let bots = db.get(`counter.${member.guild.id}.bots`)
    var server = member.guild;
    var botCount = server.members.cache.filter(member => member.user.bot).size
    var memberCount = server.memberCount - botCount;

    if(!amember) {
        return;
    } else {
        let me = member.guild.channels.cache.get(amember)
        if(!me) return;
        me.setName(`All members: ${member.guild.memberCount}`)
    }

    if(!memberD) {
        return;
    } else {
        let mi = member.guild.channels.cache.get(memberD)
        if(!mi) return
        mi.setName(`Members: ${memberCount}`)
    }

    if(!bots) {
        return;
    } else {
        let bo = member.guild.channels.cache.get(bots)
        if(!bo) return
        bo.setName(`Bots: ${botCount}`)
    }


    
    
}
