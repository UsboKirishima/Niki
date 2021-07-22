"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.permissions = exports.memberPerms = exports.help = exports.run = void 0;
const discord_js_1 = require("discord.js");
const moment_1 = __importDefault(require("moment"));
async function run(client, message, args) {
    var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s;
    let server = message.guild;
    let par = '';
    if (((_a = message.guild) === null || _a === void 0 ? void 0 : _a.partnered) == true)
        par = 'Yes';
    if (((_b = message.guild) === null || _b === void 0 ? void 0 : _b.partnered) == false || ((_c = message.guild) === null || _c === void 0 ? void 0 : _c.partnered) == null)
        par = 'Nop';
    const serverinfo_embed = new discord_js_1.MessageEmbed()
        .setAuthor(`[SERVERINFO] ${(_d = message.guild) === null || _d === void 0 ? void 0 : _d.name}`, server.iconURL({ dynamic: true, format: 'png' }))
        .addField('Name', (_e = message.guild) === null || _e === void 0 ? void 0 : _e.name, true)
        .addField('ID', (_f = message.guild) === null || _f === void 0 ? void 0 : _f.id, true)
        .addField('Icon', `[**LINK**](${(_g = message.guild) === null || _g === void 0 ? void 0 : _g.iconURL({ dynamic: true, format: 'png', size: 2048 })})`, true)
        .addField('Owner', `<@${(_h = message.guild) === null || _h === void 0 ? void 0 : _h.ownerID}>`, true)
        .addField('Server Date', `${moment_1.default((_j = message.guild) === null || _j === void 0 ? void 0 : _j.createdTimestamp).format('LT')} ${moment_1.default((_k = message.guild) === null || _k === void 0 ? void 0 : _k.createdTimestamp).format('LL')} [${moment_1.default((_l = message.guild) === null || _l === void 0 ? void 0 : _l.createdTimestamp).fromNow()}]`, true)
        .addField('Server Regions', (_m = message.guild) === null || _m === void 0 ? void 0 : _m.region, true)
        .addField('Partner', par, true)
        .addField('Rules Channel', `<#${(_o = message.guild) === null || _o === void 0 ? void 0 : _o.rulesChannelID}>`, true)
        .addField('All Members', (_p = message.guild) === null || _p === void 0 ? void 0 : _p.memberCount, true)
        .addField('Channels', server.channels.cache.size, true)
        .addField('Roles', (_q = message.guild) === null || _q === void 0 ? void 0 : _q.roles.cache.sort((a, b) => b.position - a.position).map(role => role.toString()).length, true)
        //.addField('Messages', server.messages.cache.size, true)
        .addField('Emojis', (_r = message.guild) === null || _r === void 0 ? void 0 : _r.emojis.cache.size, true)
        .addField('Boosts', (_s = message.guild) === null || _s === void 0 ? void 0 : _s.premiumSubscriptionCount, true)
        .setThumbnail(server.iconURL({ dynamic: true, format: 'png' }));
    message.channel.send(serverinfo_embed);
}
exports.run = run;
exports.help = {
    aliases: ['server', 'infoserver'],
    category: 'Miscellaneous',
    desc: 'desc',
    togglable: false,
    usage: 'serverinfo'
};
exports.memberPerms = [];
exports.permissions = [];
