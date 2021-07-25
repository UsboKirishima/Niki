"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.permissions = exports.memberPerms = exports.help = exports.run = void 0;
const discord_js_1 = require("discord.js");
async function run(client, message, args) {
    let embe = new discord_js_1.MessageEmbed()
        .setColor('RANDOM')
        .setAuthor(`[GAY] ${message.author.tag}`, message.author.displayAvatarURL({ dynamic: true }))
        .setDescription(`Gayrate: ${Math.floor(Math.random() * (100 - 1)) + 1}%`)
        .setFooter('🏳️‍🌈🏳️‍🌈', message.author.displayAvatarURL({ dynamic: true }));
    message.channel.send(embe);
}
exports.run = run;
exports.help = {
    aliases: ['gayrate'],
    category: 'Miscellaneous',
    desc: 'desc',
    togglable: false,
    usage: 'gay',
};
exports.memberPerms = [];
exports.permissions = [];
