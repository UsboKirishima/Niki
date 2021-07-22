"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.permissions = exports.memberPerms = exports.help = exports.run = void 0;
const discord_js_1 = require("discord.js");
async function run(client, message, args) {
    var _a, _b, _c;
    let gg = (_a = message.guild) === null || _a === void 0 ? void 0 : _a.iconURL({ dynamic: true });
    const guild = await ((_b = message.guild) === null || _b === void 0 ? void 0 : _b.fetch());
    const administrators = guild === null || guild === void 0 ? void 0 : guild.members.cache.filter((m) => m.hasPermission("ADMINISTRATOR") && !m.user.bot);
    const moderators = guild === null || guild === void 0 ? void 0 : guild.members.cache.filter((m) => !(administrators === null || administrators === void 0 ? void 0 : administrators.has(m.id)) && m.hasPermission("MANAGE_MESSAGES") && !m.user.bot);
    const embed = new discord_js_1.MessageEmbed()
        .setAuthor(`[STAFF] ${(_c = message.guild) === null || _c === void 0 ? void 0 : _c.name}`, gg)
        .addField('Administrator', (administrators === null || administrators === void 0 ? void 0 : administrators.size) ? administrators === null || administrators === void 0 ? void 0 : administrators.map((a) => `${a.user.tag}`).join("\n") : 'No Administrators')
        .addField('Moderators', (moderators === null || moderators === void 0 ? void 0 : moderators.size) ? moderators === null || moderators === void 0 ? void 0 : moderators.map((m) => `${m.user.tag}`).join("\n") : 'No Moderators')
        .setColor('red')
        .setThumbnail(gg);
    message.channel.send(embed);
}
exports.run = run;
exports.help = {
    aliases: ['admins', 'mods'],
    category: 'Miscellaneous',
    desc: 'desc',
    togglable: false,
    usage: 'staff',
};
exports.memberPerms = [];
exports.permissions = [];
