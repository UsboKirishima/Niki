"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.permissions = exports.memberPerms = exports.help = exports.run = void 0;
const discord_js_1 = require("discord.js");
const emojis_json_1 = require("../../utils/emojis.json");
const moment_1 = __importDefault(require("moment"));
async function run(client, message, args) {
    var _a, _b, _c, _d, _e, _f, _g, _h;
    var user;
    if (!args.slice(1).join(" ")) {
        user = message.member;
    }
    else {
        user = (_a = message.mentions.members) === null || _a === void 0 ? void 0 : _a.first();
        if (!user) {
            user = ((_b = message.guild) === null || _b === void 0 ? void 0 : _b.members.cache.get(args[1])) || ((_c = message.guild) === null || _c === void 0 ? void 0 : _c.members.cache.find(user => user.user.username.toLowerCase() == args.slice(1).join(" "))) || ((_d = message.guild) === null || _d === void 0 ? void 0 : _d.members.cache.find(user => user.user.tag.toLowerCase() == args.slice(1).join(" ")));
        }
    }
    if (!user)
        return await message.channel.send(new discord_js_1.MessageEmbed().setDescription(`${emojis_json_1.error} Invalid user.`));
    let status = user.user.presence.status;
    let state = '';
    if (status == 'online')
        state = `${emojis_json_1.online} Online`;
    if (status == 'idle')
        state = `${emojis_json_1.idle} Idle`;
    if (status == 'dnd')
        state = `${emojis_json_1.dnd} Do Not Disturb`;
    if (status == 'offline')
        state = `${emojis_json_1.offline} Offline`;
    const flags = {
        DISCORD_EMPLOYEE: "<:discord_staff:858288062374608957>",
        PARTNERED_SERVER_OWNER: "<:server_partner:858288062361894914>",
        BUGHUNTER_LEVEL_1: "<:bug_hunter:858288061858185247>",
        BUGHUNTER_LEVEL_2: "<:bug_hunter:858288061858185247>",
        HYPESQUAD_EVENTS: "<:hypesquad_events:861710073343508491>",
        HOUSE_BRAVERY: "<:bravery:861709801788801025>",
        HOUSE_BALANCE: "<:balance:861709802379804692>",
        HOUSE_BRILLIANCE: "<:brillance:861709802577199114>",
        TEAM_USER: "<:discord_nitro:858288062303305748>",
        EARLY_SUPPORTER: "<:early_supporter:858288062461902858>",
        EARLY_VERIFIED_BOT_DEVELOPER: "<:early_developer:858288062538055700>",
        VERIFIED_BOT: "<:verified_bot:858288062476189697>",
        DISCORD_CERTIFIED_MODERATOR: "<:certified_moderator:861713146459586592>",
    };
    const userFlags = await ((_e = user === null || user === void 0 ? void 0 : user.user.flags) === null || _e === void 0 ? void 0 : _e.toArray());
    const usernfo_embed = new discord_js_1.MessageEmbed()
        .setColor('RANDOM')
        .setAuthor(`[USERINFO] ${user === null || user === void 0 ? void 0 : user.user.tag}`, user === null || user === void 0 ? void 0 : user.user.displayAvatarURL({ dynamic: true, format: 'png' }))
        .setThumbnail(user.user.displayAvatarURL({ dynamic: true, format: 'png', size: 2048 }))
        .addField('👤Tag', user === null || user === void 0 ? void 0 : user.user.tag, true)
        .addField('🪧User ID', user === null || user === void 0 ? void 0 : user.user.id, true)
        .addField('✴️Status', state, true)
        .addField('🚮Account Created at', (user === null || user === void 0 ? void 0 : user.user.createdAt.toDateString()) + " (" + moment_1.default(user === null || user === void 0 ? void 0 : user.user.createdAt.getTime()).fromNow() + ")", false)
        .addField('🌆Avatar', `[LINK](${user.user.avatarURL({ dynamic: true, format: 'png', size: 2048 })})`, true)
        .addField('📲Last Message', `[Last Message](${(_f = user.user.lastMessage) === null || _f === void 0 ? void 0 : _f.url})`, true)
        .setFooter((_g = client.user) === null || _g === void 0 ? void 0 : _g.username, (_h = client.user) === null || _h === void 0 ? void 0 : _h.displayAvatarURL({ format: 'png' }))
        .setTimestamp();
    if (user.premiumSince) {
        usernfo_embed.addField('Nitro Boost', `Yes (${user.premiumSinceTimestamp})<:discord_nitro:858288062303305748><:nitro_boost:858288062546706443>`, true);
    }
    if (!user.premiumSince) {
        usernfo_embed.addField('Nitro Boost', 'No', true);
    }
    if ((userFlags === null || userFlags === void 0 ? void 0 : userFlags.length) > 0)
        usernfo_embed.addField('Badges', userFlags.map(flag => flags[flag]).join(' '), true);
    message.channel.send(usernfo_embed);
}
exports.run = run;
exports.help = {
    aliases: ['user'],
    category: 'Miscellaneous',
    desc: 'desc',
    togglable: false,
    usage: 'userinfo',
};
exports.memberPerms = [];
exports.permissions = [];
