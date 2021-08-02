"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.permissions = exports.memberPerms = exports.help = exports.run = void 0;
const discord_js_1 = require("discord.js");
async function run(client, message, args) {
    var _a, _b;
    let embed = new discord_js_1.MessageEmbed()
        .setAuthor((_a = client.user) === null || _a === void 0 ? void 0 : _a.tag, (_b = client.user) === null || _b === void 0 ? void 0 : _b.displayAvatarURL())
        .setDescription('[INVITE](https://discord.com/api/oauth2/authorize?client_id=848616509765189642&permissions=8&scope=bot%20applications.commands) | [SUPPORT SERVER](https://www.dsc.gg/MagicPoison)')
        .setColor('RANDOM');
    message.channel.send(embed);
}
exports.run = run;
exports.help = {
    aliases: ['inv', 'add'],
    category: 'Miscellaneous',
    desc: 'desc',
    togglable: false,
    usage: 'invite',
};
exports.memberPerms = [];
exports.permissions = [];
