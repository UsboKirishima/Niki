"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.permissions = exports.memberPerms = exports.help = exports.run = void 0;
const discord_js_1 = require("discord.js");
const emojis_json_1 = require("../../utils/emojis.json");
const discord_together_1 = require("discord-together");
async function run(client, message, args) {
    var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s, _t, _u, _v, _w, _x, _y, _z, _0, _1, _2, _3, _4, _5;
    const discordTogether = new discord_together_1.DiscordTogether(client);
    if (!args.slice(1).join(" ") || args[1].toLowerCase() == 'help') {
        let embed = new discord_js_1.MessageEmbed()
            .setColor('RANDOM')
            .setAuthor(`[TOGETHER] ${message.author.tag}`, message.author.displayAvatarURL({ dynamic: true }))
            .setDescription(`
        --***DISCORD TOGETHER***--

        **--Youtube**
        **-** \`nik together [youtube] [Vchannel @/id]\`
        
        **--Poker**
        **-** \`nik together [poker] [Vchannel @/id]\`

        **--Chess**
        **-** \`nik together [chess] [Vchannel @/id]\`

        **--Betrayal**
        **-** \`nik together [betrayal] [Vchannel @/id]\`

        **--Fishing**
        **-** \`nik together [fishing] [Vchannel @/id]\`
        `);
        message.channel.send(embed);
    }
    else if (args[1].toLowerCase() == 'youtube') {
        var chn;
        if (!args.slice(2).join(" ")) {
            return await message.channel.send(new discord_js_1.MessageEmbed().setDescription(`${emojis_json_1.error} Invalid channel.`));
        }
        else {
            chn = (_b = (_a = message.mentions.channels) === null || _a === void 0 ? void 0 : _a.first()) === null || _b === void 0 ? void 0 : _b.id;
            if (!chn) {
                chn = (_d = (_c = message.guild) === null || _c === void 0 ? void 0 : _c.channels.cache.get(args[2])) === null || _d === void 0 ? void 0 : _d.id;
            }
        }
        if (!chn)
            return await message.channel.send(new discord_js_1.MessageEmbed().setDescription(`${emojis_json_1.error} Invalid channel.`));
        if (((_f = (_e = message.guild) === null || _e === void 0 ? void 0 : _e.channels.cache.get(chn)) === null || _f === void 0 ? void 0 : _f.type) !== 'voice')
            return message.channel.send(new discord_js_1.MessageEmbed().setDescription(`${emojis_json_1.error} Please provide a **voice** channel.`));
        discordTogether.createTogetherCode(chn, 'youtube').then((x) => {
            message.channel.send(new discord_js_1.MessageEmbed()
                .setColor('RANDOM')
                .setAuthor(`[TOGETHER] ${message.author.tag}`, message.author.displayAvatarURL({ dynamic: true }))
                .setDescription(`[CLICK HERE TO WATCH YOUTUBE](${x.code})`));
        });
    }
    else if (args[1].toLowerCase() == 'poker') {
        var chn;
        if (!args.slice(2).join(" ")) {
            return await message.channel.send(new discord_js_1.MessageEmbed().setDescription(`${emojis_json_1.error} Invalid channel.`));
        }
        else {
            chn = (_h = (_g = message.mentions.channels) === null || _g === void 0 ? void 0 : _g.first()) === null || _h === void 0 ? void 0 : _h.id;
            if (!chn) {
                chn = (_k = (_j = message.guild) === null || _j === void 0 ? void 0 : _j.channels.cache.get(args[2])) === null || _k === void 0 ? void 0 : _k.id;
            }
        }
        if (!chn)
            return await message.channel.send(new discord_js_1.MessageEmbed().setDescription(`${emojis_json_1.error} Invalid channel.`));
        if (((_m = (_l = message.guild) === null || _l === void 0 ? void 0 : _l.channels.cache.get(chn)) === null || _m === void 0 ? void 0 : _m.type) !== 'voice')
            return message.channel.send(new discord_js_1.MessageEmbed().setDescription(`${emojis_json_1.error} Please provide a **voice** channel.`));
        discordTogether.createTogetherCode(chn, 'poker').then((x) => {
            message.channel.send(new discord_js_1.MessageEmbed()
                .setColor('RANDOM')
                .setAuthor(`[TOGETHER] ${message.author.tag}`, message.author.displayAvatarURL({ dynamic: true }))
                .setDescription(`[CLICK HERE TO PLAY POKER](${x.code})`));
        });
    }
    else if (args[1].toLowerCase() == 'chess') {
        var chn;
        if (!args.slice(2).join(" ")) {
            return await message.channel.send(new discord_js_1.MessageEmbed().setDescription(`${emojis_json_1.error} Invalid channel.`));
        }
        else {
            chn = (_p = (_o = message.mentions.channels) === null || _o === void 0 ? void 0 : _o.first()) === null || _p === void 0 ? void 0 : _p.id;
            if (!chn) {
                chn = (_r = (_q = message.guild) === null || _q === void 0 ? void 0 : _q.channels.cache.get(args[2])) === null || _r === void 0 ? void 0 : _r.id;
            }
        }
        if (!chn)
            return await message.channel.send(new discord_js_1.MessageEmbed().setDescription(`${emojis_json_1.error} Invalid channel.`));
        if (((_t = (_s = message.guild) === null || _s === void 0 ? void 0 : _s.channels.cache.get(chn)) === null || _t === void 0 ? void 0 : _t.type) !== 'voice')
            return message.channel.send(new discord_js_1.MessageEmbed().setDescription(`${emojis_json_1.error} Please provide a **voice** channel.`));
        discordTogether.createTogetherCode(chn, 'chess').then((x) => {
            message.channel.send(new discord_js_1.MessageEmbed()
                .setColor('RANDOM')
                .setAuthor(`[TOGETHER] ${message.author.tag}`, message.author.displayAvatarURL({ dynamic: true }))
                .setDescription(`[CLICK HERE TO PLAY CHESS](${x.code})`));
        });
    }
    else if (args[1].toLowerCase() == 'betrayal') {
        var chn;
        if (!args.slice(2).join(" ")) {
            return await message.channel.send(new discord_js_1.MessageEmbed().setDescription(`${emojis_json_1.error} Invalid channel.`));
        }
        else {
            chn = (_v = (_u = message.mentions.channels) === null || _u === void 0 ? void 0 : _u.first()) === null || _v === void 0 ? void 0 : _v.id;
            if (!chn) {
                chn = (_x = (_w = message.guild) === null || _w === void 0 ? void 0 : _w.channels.cache.get(args[2])) === null || _x === void 0 ? void 0 : _x.id;
            }
        }
        if (!chn)
            return await message.channel.send(new discord_js_1.MessageEmbed().setDescription(`${emojis_json_1.error} Invalid channel.`));
        if (((_z = (_y = message.guild) === null || _y === void 0 ? void 0 : _y.channels.cache.get(chn)) === null || _z === void 0 ? void 0 : _z.type) !== 'voice')
            return message.channel.send(new discord_js_1.MessageEmbed().setDescription(`${emojis_json_1.error} Please provide a **voice** channel.`));
        discordTogether.createTogetherCode(chn, 'betrayal').then((x) => {
            message.channel.send(new discord_js_1.MessageEmbed()
                .setColor('RANDOM')
                .setAuthor(`[TOGETHER] ${message.author.tag}`, message.author.displayAvatarURL({ dynamic: true }))
                .setDescription(`[CLICK HERE TO PLAY BETRAYAL](${x.code})`));
        });
    }
    else if (args[1].toLowerCase() == 'fishing') {
        var chn;
        if (!args.slice(2).join(" ")) {
            return await message.channel.send(new discord_js_1.MessageEmbed().setDescription(`${emojis_json_1.error} Invalid channel.`));
        }
        else {
            chn = (_1 = (_0 = message.mentions.channels) === null || _0 === void 0 ? void 0 : _0.first()) === null || _1 === void 0 ? void 0 : _1.id;
            if (!chn) {
                chn = (_3 = (_2 = message.guild) === null || _2 === void 0 ? void 0 : _2.channels.cache.get(args[2])) === null || _3 === void 0 ? void 0 : _3.id;
            }
        }
        if (!chn)
            return await message.channel.send(new discord_js_1.MessageEmbed().setDescription(`${emojis_json_1.error} Invalid channel.`));
        if (((_5 = (_4 = message.guild) === null || _4 === void 0 ? void 0 : _4.channels.cache.get(chn)) === null || _5 === void 0 ? void 0 : _5.type) !== 'voice')
            return message.channel.send(new discord_js_1.MessageEmbed().setDescription(`${emojis_json_1.error} Please provide a **voice** channel.`));
        discordTogether.createTogetherCode(chn, 'fishing').then((x) => {
            message.channel.send(new discord_js_1.MessageEmbed()
                .setColor('RANDOM')
                .setAuthor(`[TOGETHER] ${message.author.tag}`, message.author.displayAvatarURL({ dynamic: true }))
                .setDescription(`[CLICK HERE TO PLAY FISHING](${x.code})`));
        });
    }
}
exports.run = run;
exports.help = {
    aliases: ['tog'],
    category: 'Miscellaneous',
    desc: 'desc',
    togglable: false,
    usage: 'together'
};
exports.memberPerms = [];
exports.permissions = [];
