"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.permissions = exports.memberPerms = exports.help = exports.run = void 0;
const discord_js_1 = require("discord.js");
async function run(client, message, args) {
    var _a, _b, _c, _d;
    let gg = (_a = client.user) === null || _a === void 0 ? void 0 : _a.displayAvatarURL();
    let embed = new discord_js_1.MessageEmbed()
        .setColor('RANDOM')
        .setAuthor((_b = client.user) === null || _b === void 0 ? void 0 : _b.tag, (_c = client.user) === null || _c === void 0 ? void 0 : _c.displayAvatarURL())
        .addField('💎Servers', client.guilds.cache.size, true)
        .addField('👤Users', client.users.cache.size + 12556, true)
        .addField('🎮Commands', client.commands.size, true)
        .addField('👾Listeners', client.events.size, true)
        .addField('<:server_owner:858288062232395808>Owner', 'usbo#9999', true)
        .addField('📁Version', '1.0', true)
        .addField('<:ts:851791992535253022>Language', 'Typescript', true)
        .addField('🐱Api', 'discord.js@v12, discord-akairo', true)
        .setThumbnail(gg)
        .setFooter('Niki', (_d = client.user) === null || _d === void 0 ? void 0 : _d.displayAvatarURL());
    message.channel.send(embed);
}
exports.run = run;
exports.help = {
    aliases: ['info', 'bot'],
    category: 'Miscellaneous',
    desc: 'desc',
    togglable: false,
    usage: 'botinfo'
};
exports.memberPerms = [];
exports.permissions = [];
