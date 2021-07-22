"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Functions = void 0;
const config_json_1 = require("../config.json");
const discord_js_1 = require("discord.js");
const Constants_1 = require("../Constants");
class Functions {
    constructor() {
        this.regexArr = [/<@!?(\d{17,19})>/, /<@&(\d{17,19})>/, /<#(\d{17,19})>/];
    }
    badArg(message, argNum, desc) {
        if (message.channel.type === 'text' && !message.channel.permissionsFor(message.guild.me).has('EMBED_LINKS')) {
            message.channel.send(`Argument **#${argNum}** was invalid. Here's what was wrong with it.\n\n**${desc}**`);
            return;
        }
        const embed = new discord_js_1.MessageEmbed()
            .setColor(config_json_1.embedColor)
            .setDescription(`Argument #${argNum} is invalid. Here's what was wrong with it.\n\n**${desc}**`)
            .setFooter(`Executed by ${message.author.tag}`, message.author.displayAvatarURL())
            .setTimestamp()
            .setTitle(`Argument #${argNum} Incorrect`);
        message.channel.send(embed);
    }
    formatNum(num) {
        return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
    }
    getFullTime(timeLeft) {
        const s = Math.ceil(timeLeft / 1000 % 60);
        const m = Math.floor(timeLeft / (1000 * 60) % 60);
        const h = Math.floor(timeLeft / (1000 * 60 * 60) % 24);
        const d = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
        return `${d}d ${h}h ${m}m ${s}s`;
    }
    getTime(timeLeft) {
        const s = Math.ceil(timeLeft / 1000 % 60);
        const m = Math.floor(timeLeft / (1000 * 60) % 60);
        const h = Math.floor(timeLeft / (1000 * 60 * 60));
        return `${h}h ${m}m ${s}s`;
    }
    noArg(message, argNum, desc) {
        if (message.channel.type === 'text' && !message.channel.permissionsFor(message.guild.me).has('EMBED_LINKS')) {
            message.channel.send(`Argument **#${argNum}** was missing. It is supposed to be **${desc}**`);
            return;
        }
        const embed = new discord_js_1.MessageEmbed()
            .setColor(config_json_1.embedColor)
            .setDescription(`Argument #${argNum} is missing. It is supposed to be **${desc}**`)
            .setFooter(`Executed by ${message.author.tag}`, message.author.displayAvatarURL())
            .setTimestamp()
            .setTitle(`Argument #${argNum} Missing`);
        message.channel.send(embed);
    }
    noClientPerms(message, perms, channel) {
        const formatted = perms.map(p => `\`${Constants_1.parsedPerms[p]}\``).join('\n');
        if (channel)
            return void message.channel.send(`I do not have the required permissions in ${channel.type === 'text' ? channel : `**${channel.name}**`}.\nThe permissions are:\n\n${formatted}`);
        message.channel.send(`I do not have the required permissions.\nThe permissions are:\n\n${formatted}`);
    }
    noPerms(message, perms, channel) {
        const formatted = perms.map(p => `\`${Constants_1.parsedPerms[p]}\``).join('\n');
        if (channel) {
            message.channel.send(`You do not have the required permissions in ${channel.type === 'text' ? channel : `**${discord_js_1.Util.escapeMarkdown(channel.name)}**`}.\nThe permissions are:\n\n${formatted}`);
            return;
        }
        message.channel.send(`You do not have the required permissions.\nThe permissions are:\n\n${formatted}`);
    }
    parseArgs(str) {
        const cmd = str.split(/\s+/)[0];
        str = str.slice(cmd.length);
        const regex = /"(.+?(?<!\\))"(?!\S)|(\S+)/gs;
        const matches = [...str.matchAll(regex)].map(s => {
            const match = s[1] || s[0];
            if (match.includes(' '))
                return match.replace(/\\"/gs, '"').replace(/\\ /gs, ' ');
            return match;
        });
        return [cmd, ...matches];
    }
    parseMention(id, options) {
        if (!parseInt(id) && !this.regexArr.some(regex => regex.test(id))) {
            if (['member', 'user'].includes(options.type))
                return Promise.reject(null);
            return null;
        }
        let parsedId;
        if (!parseInt(id)) {
            parsedId = id.slice(2, -1);
            if (id.startsWith('<@!') || id.startsWith('<@&'))
                parsedId = id.slice(3, -1);
        }
        else
            parsedId = id;
        const cType = options.cType || 'text';
        switch (options.type) {
            case 'member': return options.guild.members.fetch(parsedId);
            case 'user': return options.client.users.fetch(parsedId);
            case 'role': return options.guild.roles.cache.get(parsedId);
            case 'channel': return options.guild.channels.cache.find(c => c.id === parsedId && c.type === cType);
            default: return false;
        }
    }
    uppercase(str) {
        return str[0].toUpperCase() + str.slice(1);
    }
}
exports.Functions = Functions;
