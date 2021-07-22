"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.permissions = exports.memberPerms = exports.help = exports.run = void 0;
const discord_js_1 = require("discord.js");
require("discord-reply");
async function run(client, message, args) {
    if (message.author.id !== '848463685374443530')
        return message.channel.send(`You can\'t use this command -_-!'`);
    const gg = discord_js_1.GuildMember;
    client.emit('guildMemberAdd', gg);
}
exports.run = run;
exports.help = {
    aliases: ['wt'],
    category: 'Miscellaneous',
    desc: 'desc',
    togglable: false,
    usage: 'welcometest'
};
exports.memberPerms = [];
exports.permissions = [];
